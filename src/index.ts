/**
 * Model-facing molecule viewer tool.
 *
 * Registers `view_molecule`: the model passes a molecular file path or raw
 * content (PDB/SDF/MOL2/MOL), the tool validates and counts atoms, and
 * returns structured metadata. The UI payload (raw data + initial style)
 * rides the `tool/result` event's `presentationMeta` projection, which every
 * harness build persists and replays, and the client-half renders it through
 * the keyed `tool.call.toolview` slot — no custom session event type, so
 * session history reloads on stock harness installs.
 *
 * @module @dsh-plugins/dsh-molecule-viewer
 */

import { existsSync, readFileSync } from 'node:fs'
import { basename } from 'node:path'
import type { Context } from '@deepseek-ai/cordis'
import z from '@deepseek-ai/schemastery'
import { defineTool } from '@deepseek-ai/dsh-tools'
import type { ToolResultView } from '@deepseek-ai/dsh-tools'
import { parseMolecule } from './parser.ts'
import {
  MOLECULE_META_KIND,
  type MoleculeFormat, type MoleculeStyle, type MoleculeViewMeta,
  type ViewMoleculeArgs, type ViewMoleculeResult,
} from './types.ts'

// Re-export shared types so consumers (and the client half) import from one place.
export type {
  MoleculeFormat, MoleculeStyle, MoleculeViewMeta,
  ViewMoleculeArgs, ViewMoleculeResult,
} from './types.ts'
export { MOLECULE_META_KIND } from './types.ts'

export const name = 'tool-molecule-viewer'
export const inject = ['tools']

/** Supported input formats, as a runtime tuple for schema enum generation. */
const FORMATS: readonly MoleculeFormat[] = ['pdb', 'sdf', 'mol2', 'mol']

/** Supported display styles, as a runtime tuple for schema enum generation. */
const STYLES: readonly MoleculeStyle[] = ['stick', 'line', 'sphere', 'cartoon']

/** Defensive read cap: molecular files are KB-to-MB scale; anything bigger is a mistake. */
const MAX_FILE_BYTES = 50 * 1024 * 1024

/**
 * Cap on molecular content inlined into the persisted UI payload. The payload
 * rides the session log, so an unbounded inline would balloon every future
 * write of the log; above the cap the client renders a summary card instead
 * of the interactive viewer.
 */
const MAX_META_INLINE_BYTES = 2 * 1024 * 1024

/** Extension → format. */
const EXTENSION_FORMATS: Readonly<Record<string, MoleculeFormat>> = {
  '.pdb': 'pdb',
  '.ent': 'pdb',
  '.sdf': 'sdf',
  '.sd': 'sdf',
  '.mol2': 'mol2',
  '.mol': 'mol',
}

/**
 * Resolve a user-supplied path against the file system. The DSH host may run
 * on Windows, Linux, or WSL while the user speaks the OTHER side's dialect —
 * so `D:\x\y.pdb` is retried as `/mnt/d/x/y.pdb` and vice versa. Tilde is
 * expanded against the host HOME. Returns the first existing candidate.
 */
function resolveMoleculePath(input: string): string | undefined {
  const candidates: string[] = []
  const push = (candidate: string): void => {
    if (!candidates.includes(candidate)) candidates.push(candidate)
  }
  const trimmed = input.trim()
  push(trimmed)
  if (trimmed.startsWith('~/')) push((process.env.HOME ?? '') + trimmed.slice(1))
  // Windows drive letter → WSL /mnt/<drive>/ mount.
  const drive = /^([A-Za-z]):[\\/](.*)$/.exec(trimmed)
  if (drive !== null) {
    const [, letter, rest] = drive
    push(`/mnt/${letter.toLowerCase()}/${rest.replace(/\\/g, '/')}`)
  }
  // WSL /mnt/<drive>/ path → Windows form is only useful on a Windows host,
  // but trying it costs nothing and covers the reverse direction.
  const wsl = /^\/mnt\/([A-Za-z])\/(.*)$/.exec(trimmed)
  if (wsl !== null) {
    const [, letter, rest] = wsl
    push(`${letter.toUpperCase()}:\\${rest.replace(/\//g, '\\')}`)
  }
  return candidates.find(candidate => existsSync(candidate))
}

/** Infer the format from a file name's extension, if recognized. */
function formatFromPath(input: string): MoleculeFormat | undefined {
  const extension = basename(input.trim()).replace(/^.*(\.[^.]+)$/, '$1').toLowerCase()
  return EXTENSION_FORMATS[extension]
}

/**
 * Read molecule content from `path`, resolving cross-OS spellings. Throws a
 * descriptive error naming every candidate tried when none exists.
 */
function readMoleculeFile(input: string): { data: string; resolvedPath: string } {
  const trimmed = input.trim()
  const resolved = resolveMoleculePath(trimmed)
  if (resolved === undefined) {
    const wslHint = /^([A-Za-z]):/.test(trimmed) ? ` (also tried ${trimmed.replace(/^([A-Za-z]):[\\/]/, (_m, d: string) => `/mnt/${d.toLowerCase()}/`).replace(/\\/g, '/')})` : ''
    throw new Error(`molecule file not found: ${trimmed}${wslHint}`)
  }
  const bytes = readFileSync(resolved)
  if (bytes.byteLength > MAX_FILE_BYTES) {
    throw new Error(`molecule file too large: ${resolved} is ${bytes.byteLength} bytes (cap ${MAX_FILE_BYTES})`)
  }
  return { data: bytes.toString('utf8'), resolvedPath: resolved }
}

/** Plugin configuration. */
export interface Config {
  /** Default rendering style when the model omits `style`. */
  defaultStyle: MoleculeStyle
}

/** Schemastery configuration schema for the molecule viewer tool. */
export const Config: z<Config> = z.object({
  defaultStyle: z.union([...STYLES]).default('stick'),
})

/**
 * Project the UI payload for the `tool/result` event. Receives the validated
 * call arguments plus the model-facing result value; re-reads `path` sources
 * server-side so raw molecular content never bloats the model-facing result.
 * Never throws — a projection failure degrades to an `ok: false` payload so
 * the tool call itself still lands.
 */
function projectMeta(
  args: ViewMoleculeArgs,
  result: ViewMoleculeResult,
  defaultStyle: MoleculeStyle,
): MoleculeViewMeta {
  const style = args.style ?? defaultStyle
  const base: Pick<MoleculeViewMeta, 'kind' | 'format' | 'style' | 'name'> = {
    kind: MOLECULE_META_KIND,
    format: result.format,
    style,
    ...(result.name !== undefined ? { name: result.name } : {}),
  }
  if (!result.ok) {
    return { ...base, ok: false, atomCount: 0, error: result.error ?? 'parse failed' }
  }
  let data: string | undefined
  let truncated = false
  try {
    if (args.data !== undefined) {
      data = Buffer.byteLength(args.data, 'utf8') > MAX_META_INLINE_BYTES ? undefined : args.data
      truncated = data === undefined
    } else if (args.path !== undefined) {
      // Snapshot at result time: the payload replays verbatim on every reload.
      const read = readMoleculeFile(args.path)
      data = Buffer.byteLength(read.data, 'utf8') > MAX_META_INLINE_BYTES ? undefined : read.data
      truncated = data === undefined
    }
  } catch {
    data = undefined
  }
  return {
    ...base,
    ok: true,
    atomCount: result.atomCount,
    ...(data !== undefined ? { data } : {}),
    ...(truncated ? { truncated: true as const } : {}),
  }
}

/**
 * Plugin body: register the `view_molecule` tool on the tools registry.
 * @param ctx - Cordis context carrying the tools service.
 * @param config - resolved plugin configuration.
 */
export function apply(ctx: Context, config: Config): void {
  ctx.tools.register(defineTool({
    name: 'view_molecule',
    description:
      'Visualize a molecular structure in 3D — an interactive viewer (rotate/zoom, style, background and coloring controls) appears in the conversation. '
      + 'PREFER the `path` argument: pass the file path exactly as the user gave it (Windows and WSL spellings both work, e.g. "D:\\project\\x.pdb"); the tool reads the file server-side, which is fast. '
      + 'Only fall back to `data` (raw file content) when the molecule has no file on disk. '
      + 'Supported formats: PDB (proteins/large molecules), SDF, MOL2, MOL. '
      + 'With `path` the format is inferred from the extension and may be omitted. '
      + 'SMILES is not supported yet — a format with 3D coordinates is required.',
    parameters: {
      path: {
        type: 'string',
        description: 'Path to the molecular file, exactly as the user provided it '
          + '(Windows "D:\\dir\\x.pdb" and POSIX "/mnt/d/dir/x.pdb" both resolve; "~/" expands). '
          + 'The tool reads it directly — do NOT paste the file content into `data` when a file exists.',
      },
      data: {
        type: 'string',
        description: 'Raw molecular file content as plain text — ONLY for molecules with no file on disk '
          + '(e.g. content pasted in chat). Do NOT base64-encode.',
      },
      format: {
        type: 'string',
        enum: FORMATS,
        description: 'The file format. Required with `data`; with `path` it is inferred from the extension '
          + '(.pdb/.ent→pdb, .sdf/.sd→sdf, .mol2→mol2, .mol→mol) and may be omitted.',
      },
      name: {
        type: 'string',
        description: 'Optional display name for the molecule (e.g. "1CRN" or "aspirin"). '
          + 'Shown as the viewer title.',
      },
      style: {
        type: 'string',
        enum: STYLES,
        description: 'Initial 3D rendering style. '
          + '"cartoon" — secondary-structure ribbons for proteins; co-crystallized ligands and standalone small molecules automatically render as sticks so they stay visible. Best for proteins. '
          + '"stick" — bonds as sticks (default, good for small molecules). '
          + '"line" — wireframe lines (minimal). '
          + '"sphere" — space-filling spheres (van der Waals surface). '
          + 'The user can change style, background color, and molecule coloring live in the viewer.',
      },
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          format: { type: 'string', required: true, enum: FORMATS },
          atomCount: { type: 'integer', required: true },
          ok: { type: 'boolean', required: true },
          name: { type: 'string' },
          error: { type: 'string' },
        },
      },
      render: (_args, value) => {
        const result = value as ViewMoleculeResult
        if (!result.ok) {
          return [{ type: 'text', text: `Failed to parse ${result.format} data: ${result.error ?? 'unknown error'}` }]
        }
        const label = result.name !== undefined ? ` "${result.name}"` : ''
        return [{
          type: 'text',
          text: `Displayed${label} (${result.format}, ${result.atomCount} atoms) — interactive 3D viewer attached to this call.`,
        }]
      },
      // The UI payload rides the tool/result event and reaches the client's
      // keyed tool.call.toolview renderer as block.meta — durable across reloads.
      presentationMeta: (args, value) =>
        projectMeta(args as ViewMoleculeArgs, value as ViewMoleculeResult, config.defaultStyle),
    },
    async execute(args: ViewMoleculeArgs) {
      const { data: inlineData, path: moleculePath, name: moleculeName } = args

      // Exactly one source: `path` (server-side read, fast) or `data` (inline).
      if (moleculePath === undefined && inlineData === undefined) {
        throw new Error('view_molecule needs either `path` (preferred — a file on disk) or `data` (raw content)')
      }
      if (moleculePath !== undefined && inlineData !== undefined) {
        throw new Error('view_molecule: pass `path` OR `data`, not both — prefer `path` when a file exists')
      }

      let data: string
      let resolvedFormat: MoleculeFormat
      let displayName: string | undefined = moleculeName
      if (moleculePath !== undefined) {
        const { data: fileData, resolvedPath } = readMoleculeFile(moleculePath)
        data = fileData
        resolvedFormat = args.format ?? formatFromPath(moleculePath) ?? 'pdb'
        if (displayName === undefined) displayName = basename(resolvedPath)
      } else if (inlineData !== undefined) {
        if (args.format === undefined) {
          throw new Error('view_molecule: `format` is required when passing inline `data` (with `path` it is inferred from the extension)')
        }
        data = inlineData
        resolvedFormat = args.format
      } else {
        throw new Error('unreachable: source presence validated above')
      }
      const format = resolvedFormat

      const parseResult = parseMolecule(format, data)

      if (!parseResult.ok) {
        const errorResult: ViewMoleculeResult = {
          format,
          atomCount: 0,
          ok: false,
          error: parseResult.error,
          ...(displayName !== undefined ? { name: displayName } : {}),
        }
        return errorResult
      }

      const result: ViewMoleculeResult = {
        format,
        atomCount: parseResult.atomCount,
        ok: true,
        ...(displayName !== undefined ? { name: displayName } : {}),
      }
      return result
    },
    presentCall: (args) => {
      const label = args.name !== undefined ? `: ${args.name}` : args.path !== undefined ? `: ${args.path}` : ''
      return {
        card: 'generic',
        title: `View molecule${label}`,
        kind: 'other',
      }
    },
    presentResult: (_args, result): ToolResultView | undefined => {
      const meta = result.meta as MoleculeViewMeta | undefined
      if (meta?.ok !== true) return undefined
      const label = meta.name !== undefined ? ` ${meta.name}` : ''
      return {
        card: 'generic',
        title: `Molecule${label}`,
        content: [{ type: 'text', text: `${meta.format.toUpperCase()} · ${meta.atomCount} atoms — 3D viewer rendered` }],
      }
    },
  }))
}
