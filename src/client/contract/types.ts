/**
 * Shared client-side types for the molecule viewer.
 *
 * These mirror the host-half types; the client must NOT import the host package
 * (cross-package plugin imports are forbidden). Instead we redeclare the wire
 * contract here so both sides agree without a build dependency.
 * @module contract/types
 */

/** Supported molecular file formats (mirror of host-half type). */
export type MoleculeFormat = 'pdb' | 'sdf' | 'mol2' | 'mol'

/** Display styles (mirror of host-half type). */
export type MoleculeStyle = 'stick' | 'line' | 'sphere' | 'cartoon'

/** Final keyed Chat payload for one molecule view node. */
export interface MoleculeChatData {
  /** Stable id correlating with the session event. */
  readonly viewerEventId: string
  /** File format of `data`. */
  readonly format: MoleculeFormat
  /** Raw molecular file content for 3Dmol.js to parse in the browser. */
  readonly data: string
  /** Optional display name. */
  readonly name?: string
  /** Atom count from the host-side lightweight parse. */
  readonly atomCount: number
  /** Initial rendering style. */
  readonly style: MoleculeStyle
}

/** State carried by the Conversation Node (start = terminal, no updates). */
export interface MoleculeViewState {
  readonly viewerEventId: string
  readonly format: MoleculeFormat
  readonly data: string
  readonly name?: string
  readonly atomCount: number
  readonly style: MoleculeStyle
  readonly turn: number
  readonly step: number
}
