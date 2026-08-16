/**
 * Model-facing molecule viewer tool.
 *
 * Registers `view_molecule`: the model passes molecular file content
 * (PDB/SDF/MOL2/MOL), the tool validates and counts atoms, appends a
 * `molecule/view` session event carrying the raw data + a stable id, and
 * returns structured metadata. The client-half Conversation Node binds to
 * the same `viewerEventId` and renders 3Dmol.js.
 *
 * Single-event Context (start = terminal): one event per call, matched by
 * `viewerEventId` in the client definition.
 * @module @dsh-plugins/dsh-molecule-viewer
 */
import { existsSync, readFileSync } from 'node:fs';
import { randomBytes } from 'node:crypto';
import { basename } from 'node:path';
import z from '@deepseek-ai/schemastery';
import { defineTool } from '@deepseek-ai/dsh-tools';
import { parseMolecule } from "./parser.js";
export const name = 'tool-molecule-viewer';
export const inject = ['tools'];
/** Supported input formats, as a runtime tuple for schema enum generation. */
const FORMATS = ['pdb', 'sdf', 'mol2', 'mol'];
/** Supported display styles, as a runtime tuple for schema enum generation. */
const STYLES = ['stick', 'line', 'sphere', 'cartoon'];
/** Defensive read cap: molecular files are KB-to-MB scale; anything bigger is a mistake. */
const MAX_FILE_BYTES = 50 * 1024 * 1024;
/** Extension → format. */
const EXTENSION_FORMATS = {
    '.pdb': 'pdb',
    '.ent': 'pdb',
    '.sdf': 'sdf',
    '.sd': 'sdf',
    '.mol2': 'mol2',
    '.mol': 'mol',
};
/**
 * Resolve a user-supplied path against the file system. The DSH host may run
 * on Windows, Linux, or WSL while the user speaks the OTHER side's dialect —
 * so `D:\x\y.pdb` is retried as `/mnt/d/x/y.pdb` and vice versa. Tilde is
 * expanded against the host HOME. Returns the first existing candidate.
 */
function resolveMoleculePath(input) {
    const candidates = [];
    const push = (candidate) => {
        if (!candidates.includes(candidate))
            candidates.push(candidate);
    };
    const trimmed = input.trim();
    push(trimmed);
    if (trimmed.startsWith('~/'))
        push((process.env.HOME ?? '') + trimmed.slice(1));
    // Windows drive letter → WSL /mnt/<drive>/ mount.
    const drive = /^([A-Za-z]):[\\/](.*)$/.exec(trimmed);
    if (drive !== null) {
        const [, letter, rest] = drive;
        push(`/mnt/${letter.toLowerCase()}/${rest.replace(/\\/g, '/')}`);
    }
    // WSL /mnt/<drive>/ path → Windows form is only useful on a Windows host,
    // but trying it costs nothing and covers the reverse direction.
    const wsl = /^\/mnt\/([A-Za-z])\/(.*)$/.exec(trimmed);
    if (wsl !== null) {
        const [, letter, rest] = wsl;
        push(`${letter.toUpperCase()}:\\${rest.replace(/\//g, '\\')}`);
    }
    return candidates.find(candidate => existsSync(candidate));
}
/** Infer the format from a file name's extension, if recognized. */
function formatFromPath(input) {
    const extension = basename(input.trim()).replace(/^.*(\.[^.]+)$/, '$1').toLowerCase();
    return EXTENSION_FORMATS[extension];
}
/**
 * Read molecule content from `path`, resolving cross-OS spellings. Throws a
 * descriptive error naming every candidate tried when none exists.
 */
function readMoleculeFile(input) {
    const trimmed = input.trim();
    const resolved = resolveMoleculePath(trimmed);
    if (resolved === undefined) {
        const wslHint = /^([A-Za-z]):/.test(trimmed) ? ` (also tried ${trimmed.replace(/^([A-Za-z]):[\\/]/, (_m, d) => `/mnt/${d.toLowerCase()}/`).replace(/\\/g, '/')})` : '';
        throw new Error(`molecule file not found: ${trimmed}${wslHint}`);
    }
    const bytes = readFileSync(resolved);
    if (bytes.byteLength > MAX_FILE_BYTES) {
        throw new Error(`molecule file too large: ${resolved} is ${bytes.byteLength} bytes (cap ${MAX_FILE_BYTES})`);
    }
    return { data: bytes.toString('utf8'), resolvedPath: resolved };
}
/** Schemastery configuration schema for the molecule viewer tool. */
export const Config = z.object({
    defaultStyle: z.union([...STYLES]).default('stick'),
});
/**
 * Generate a short stable id for one view event. Not cryptographically
 * significant — just unique within a session.
 */
function newViewerEventId() {
    return `mol-${randomBytes(6).toString('hex')}`;
}
/**
 * Resolve the current turn/step coordinates from the owning session's event
 * log. The tool runs inside a step; the most recent step/start gives both.
 * Falls back to (0, 0) when no step context exists (e.g. a non-agent caller).
 */
function currentCoordinates(session) {
    for (const event of [...session.events].reverse()) {
        if (event.type === 'step/start') {
            const data = event.data;
            return { turn: data.turn ?? 0, step: data.step ?? 0 };
        }
    }
    // No step/start yet — use the latest turn/start, or zero.
    for (const event of [...session.events].reverse()) {
        if (event.type === 'turn/start') {
            const data = event.data;
            return { turn: data.turn ?? 0, step: 0 };
        }
    }
    return { turn: 0, step: 0 };
}
/**
 * Plugin body: register the `view_molecule` tool on the tools registry.
 * @param ctx - Cordis context carrying the tools service.
 * @param config - resolved plugin configuration.
 */
export function apply(ctx, config) {
    ctx.tools.register(defineTool({
        name: 'view_molecule',
        description: 'Visualize a molecular structure in 3D — an interactive viewer (rotate/zoom, style, background and coloring controls) appears in the conversation. '
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
                    viewerEventId: { type: 'string', required: true },
                    ok: { type: 'boolean', required: true },
                    name: { type: 'string' },
                    error: { type: 'string' },
                },
            },
            render: (_args, value) => {
                const result = value;
                if (!result.ok) {
                    return [{ type: 'text', text: `Failed to parse ${result.format} data: ${result.error ?? 'unknown error'}` }];
                }
                const label = result.name !== undefined ? ` "${result.name}"` : '';
                return [{
                        type: 'text',
                        text: `Displayed${label} (${result.format}, ${result.atomCount} atoms) — interactive 3D viewer shown above.`,
                    }];
            },
            // presentationMeta: carries the result back for UI replay consistency.
            presentationMeta: (_args, value) => value,
        },
        async execute(args, exec) {
            const { data: inlineData, path: moleculePath, name: moleculeName } = args;
            const style = args.style ?? config.defaultStyle;
            // Exactly one source: `path` (server-side read, fast) or `data` (inline).
            if (moleculePath === undefined && inlineData === undefined) {
                throw new Error('view_molecule needs either `path` (preferred — a file on disk) or `data` (raw content)');
            }
            if (moleculePath !== undefined && inlineData !== undefined) {
                throw new Error('view_molecule: pass `path` OR `data`, not both — prefer `path` when a file exists');
            }
            let data;
            let resolvedFormat;
            let displayName = moleculeName;
            if (moleculePath !== undefined) {
                const { data: fileData, resolvedPath } = readMoleculeFile(moleculePath);
                data = fileData;
                resolvedFormat = args.format ?? formatFromPath(moleculePath) ?? 'pdb';
                if (displayName === undefined)
                    displayName = basename(resolvedPath);
            }
            else if (inlineData !== undefined) {
                if (args.format === undefined) {
                    throw new Error('view_molecule: `format` is required when passing inline `data` (with `path` it is inferred from the extension)');
                }
                data = inlineData;
                resolvedFormat = args.format;
            }
            else {
                throw new Error('unreachable: source presence validated above');
            }
            const format = resolvedFormat;
            const parseResult = parseMolecule(format, data);
            if (!parseResult.ok) {
                const errorResult = {
                    format,
                    atomCount: 0,
                    ok: false,
                    error: parseResult.error,
                    ...(displayName !== undefined ? { name: displayName } : {}),
                    viewerEventId: newViewerEventId(),
                };
                return errorResult;
            }
            const viewerEventId = newViewerEventId();
            // Emit the molecule/view event for the client Conversation Node.
            // The event carries the raw data so 3Dmol.js can parse it in the browser.
            if (exec.agent === undefined) {
                throw new Error('view_molecule requires an owning agent session to render the 3D viewer');
            }
            const { turn, step } = currentCoordinates(exec.agent.session);
            exec.agent.session.append('molecule/view', {
                viewerEventId,
                format,
                data,
                ...(displayName !== undefined ? { name: displayName } : {}),
                style,
                turn,
                step,
            });
            const result = {
                format,
                atomCount: parseResult.atomCount,
                ok: true,
                viewerEventId,
                ...(displayName !== undefined ? { name: displayName } : {}),
            };
            return result;
        },
        presentCall: (args) => {
            const label = args.name !== undefined ? `: ${args.name}` : args.path !== undefined ? `: ${args.path}` : '';
            return {
                card: 'generic',
                title: `View molecule${label}`,
                kind: 'other',
            };
        },
        presentResult: (_args, result) => {
            const meta = result.meta;
            if (meta === undefined || !meta.ok)
                return undefined;
            const label = meta.name !== undefined ? ` ${meta.name}` : '';
            return {
                card: 'generic',
                title: `Molecule${label}`,
                content: [{ type: 'text', text: `${meta.format.toUpperCase()} · ${meta.atomCount} atoms — 3D viewer rendered` }],
            };
        },
    }));
}
//# sourceMappingURL=index.js.map