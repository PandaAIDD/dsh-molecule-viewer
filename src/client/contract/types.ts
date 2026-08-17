/**
 * Client-side wire contract for the molecule viewer.
 *
 * The client must NOT import the host package (cross-package plugin imports
 * are forbidden), so this module mirrors the host-half `MoleculeViewMeta`
 * shape plus a runtime guard. The payload arrives as `block.meta` on the
 * settled tool call block.
 * @module contract/types
 */

/** Supported molecular file formats (mirror of host-half type). */
export type MoleculeFormat = 'pdb' | 'sdf' | 'mol2' | 'mol'

/** Display styles (mirror of host-half type). */
export type MoleculeStyle = 'stick' | 'line' | 'sphere' | 'cartoon'

/**
 * UI payload persisted with the `view_molecule` tool/result event via the
 * host's `presentationMeta` projection (mirror of the host-half type).
 */
export interface MoleculeViewMeta {
  readonly kind: 'molecule-view'
  readonly ok: boolean
  readonly format: MoleculeFormat
  readonly atomCount: number
  readonly style: MoleculeStyle
  readonly name?: string
  readonly error?: string
  readonly data?: string
  readonly truncated?: true
}

const FORMATS: readonly unknown[] = ['pdb', 'sdf', 'mol2', 'mol']
const STYLES: readonly unknown[] = ['stick', 'line', 'sphere', 'cartoon']

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

/**
 * Narrow an untrusted `block.meta` into {@link MoleculeViewMeta}. The payload
 * crosses the wire and may come from a different (older or newer) plugin
 * version, so every field the renderer reads is checked.
 */
export function isMoleculeViewMeta(value: unknown): value is MoleculeViewMeta {
  if (!isRecord(value)) return false
  return value['kind'] === 'molecule-view'
    && typeof value['ok'] === 'boolean'
    && FORMATS.includes(value['format'])
    && typeof value['atomCount'] === 'number'
    && STYLES.includes(value['style'])
    && (value['name'] === undefined || typeof value['name'] === 'string')
    && (value['error'] === undefined || typeof value['error'] === 'string')
    && (value['data'] === undefined || typeof value['data'] === 'string')
    && (value['truncated'] === undefined || value['truncated'] === true)
}
