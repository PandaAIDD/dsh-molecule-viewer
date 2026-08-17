/**
 * Shared types for the molecule viewer tool plugin.
 *
 * The viewer payload travels inside the `tool/result` event's
 * `presentationMeta` projection (a first-class harness event type that every
 * build persists and replays), so no custom session event type is declared:
 * out-of-repo event types are refused on load by builds that do not know
 * them, which would break session history for downstream users.
 * @module @dsh-plugins/dsh-tool-molecule-viewer/types
 */

/** Supported molecular file formats with native 3Dmol.js parsing. */
export type MoleculeFormat = 'pdb' | 'sdf' | 'mol2' | 'mol'

/** Display styles understood by 3Dmol.js. */
export type MoleculeStyle = 'stick' | 'line' | 'sphere' | 'cartoon'

/** Tool-facing arguments after schema validation. */
export interface ViewMoleculeArgs {
  /**
   * Path to a molecular file, read server-side (preferred source). Windows and
   * POSIX spellings both resolve; `~` expands against the host HOME.
   */
  path?: string
  /** Raw molecular file content as a UTF-8 string — only when no file exists. */
  data?: string
  /**
   * File format. Required with `data`; inferred from `path`'s extension when
   * omitted.
   */
  format?: MoleculeFormat
  /** Optional human-readable display name. */
  name?: string
  /** Initial rendering style; the user may change it live in the client. */
  style?: MoleculeStyle
}

/** Canonical tool result returned to the model. */
export interface ViewMoleculeResult {
  /** Echoed input format. */
  format: MoleculeFormat
  /** Number of atoms detected during a lightweight parse pass. */
  atomCount: number
  /** Optional display name. */
  name?: string
  /** Whether the data failed basic validation. */
  ok: boolean
  /** Diagnostic message when `ok` is false. */
  error?: string
}

/** Marker distinguishing this tool's meta from every other tool's payload. */
export const MOLECULE_META_KIND = 'molecule-view'

/**
 * UI payload persisted with the `tool/result` event via
 * `output.presentationMeta` and delivered to the client's keyed
 * `tool.call.toolview` renderer as `block.meta`. Snapshot semantics: the
 * payload is projected once at result time and replayed verbatim on reload.
 * Declared as a type alias so it stays assignable to the `JsonValue` index
 * signature `presentationMeta` returns.
 */
export type MoleculeViewMeta = {
  /** Discriminant; always {@link MOLECULE_META_KIND}. */
  readonly kind: typeof MOLECULE_META_KIND
  /** Whether the molecular data parsed successfully. */
  readonly ok: boolean
  /** File format of `data`. */
  readonly format: MoleculeFormat
  /** Atoms counted by the host-side parse (0 when `ok` is false). */
  readonly atomCount: number
  /** Initial rendering style. */
  readonly style: MoleculeStyle
  /** Optional display name. */
  readonly name?: string
  /** Diagnostic message when `ok` is false. */
  readonly error?: string
  /**
   * Raw molecular file content for 3Dmol.js to parse in the browser. Omitted
   * when the parse failed, when the source could not be re-read, or when the
   * content exceeds the inline cap (then `truncated` is set).
   */
  readonly data?: string
  /** Set when `data` was withheld because the content exceeds the inline cap. */
  readonly truncated?: true
}
