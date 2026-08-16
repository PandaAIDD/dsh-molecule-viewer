/**
 * Shared types for the molecule viewer tool plugin.
 *
 * The `SessionEventMap` declaration merge publishes the `molecule/view`
 * event consumed by the client-half Conversation Node. Both halves import
 * these types so the wire contract stays in one place.
 * @module @dsh-plugins/dsh-tool-molecule-viewer/types
 */
/** Supported molecular file formats with native 3Dmol.js parsing. */
export type MoleculeFormat = 'pdb' | 'sdf' | 'mol2' | 'mol';
/** Display styles understood by 3Dmol.js. */
export type MoleculeStyle = 'stick' | 'line' | 'sphere' | 'cartoon';
/** Tool-facing arguments after schema validation. */
export interface ViewMoleculeArgs {
    /**
     * Path to a molecular file, read server-side (preferred source). Windows and
     * POSIX spellings both resolve; `~` expands against the host HOME.
     */
    path?: string;
    /** Raw molecular file content as a UTF-8 string — only when no file exists. */
    data?: string;
    /**
     * File format. Required with `data`; inferred from `path`'s extension when
     * omitted.
     */
    format?: MoleculeFormat;
    /** Optional human-readable display name. */
    name?: string;
    /** Initial rendering style; the user may change it live in the client. */
    style?: MoleculeStyle;
}
/** Canonical tool result returned to the model. */
export interface ViewMoleculeResult {
    /** Echoed input format. */
    format: MoleculeFormat;
    /** Number of atoms detected during a lightweight parse pass. */
    atomCount: number;
    /** Optional display name. */
    name?: string;
    /**
     * Stable id correlating the session event with the client renderer.
     * The model sees this so it can reference the molecule in follow-up text.
     */
    viewerEventId: string;
    /** Whether the data failed basic validation. */
    ok: boolean;
    /** Diagnostic message when `ok` is false. */
    error?: string;
}
/**
 * Payload of the `molecule/view` session event.
 *
 * Single-event Context (start = terminal): the host emits exactly one event
 * per tool call, and the client Conversation Node matches on `viewerEventId`.
 */
export interface MoleculeViewEventData {
    /** Stable business id shared across the tool result and the client node. */
    readonly viewerEventId: string;
    /** File format of `data`. */
    readonly format: MoleculeFormat;
    /** Raw molecular file content for 3Dmol.js to parse in the browser. */
    readonly data: string;
    /** Optional display name. */
    readonly name?: string;
    /** Initial rendering style. */
    readonly style: MoleculeStyle;
    /** Turn coordinate for Conversation Node location anchoring. */
    readonly turn: number;
    /** Step coordinate for Conversation Node location anchoring. */
    readonly step: number;
}
declare module '@deepseek-ai/dsh-session/types' {
    interface SessionEventMap {
        /**
         * One molecule view request: carries parsed molecular data and a stable id
         * that the client Conversation Node binds to a 3Dmol.js renderer.
         * @mode emit
         * @param data - stable identity, molecular data, coordinates, and style.
         */
        'molecule/view': MoleculeViewEventData;
    }
}
