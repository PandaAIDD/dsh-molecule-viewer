/**
 * Lightweight molecular file parser.
 *
 * This does NOT do full chemistry parsing — it validates the format and
 * counts atoms so the tool result gives the model useful metadata. The
 * actual 3D rendering happens client-side via 3Dmol.js, which has its own
 * robust parsers for each format.
 * @module @dsh-plugins/dsh-tool-molecule-viewer/parser
 */
import type { MoleculeFormat } from './types.ts';
/** Result of a lightweight parse pass. */
export interface ParseResult {
    /** Estimated atom count. */
    atomCount: number;
    /** Whether the content looks valid for the declared format. */
    ok: boolean;
    /** Diagnostic message when validation fails. */
    error?: string;
}
/**
 * Dispatch to the format-specific lightweight parser.
 * @param format - the declared file format.
 * @param data - raw file content.
 * @returns atom count and validity.
 */
export declare function parseMolecule(format: MoleculeFormat, data: string): ParseResult;
