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
import type { Context } from '@deepseek-ai/cordis';
import z from '@deepseek-ai/schemastery';
import type { MoleculeStyle } from './types.ts';
export type { MoleculeFormat, MoleculeStyle, MoleculeViewEventData, ViewMoleculeArgs, ViewMoleculeResult, } from './types.ts';
export declare const name = "tool-molecule-viewer";
export declare const inject: string[];
/** Plugin configuration. */
export interface Config {
    /** Default rendering style when the model omits `style`. */
    defaultStyle: MoleculeStyle;
}
/** Schemastery configuration schema for the molecule viewer tool. */
export declare const Config: z<Config>;
/**
 * Plugin body: register the `view_molecule` tool on the tools registry.
 * @param ctx - Cordis context carrying the tools service.
 * @param config - resolved plugin configuration.
 */
export declare function apply(ctx: Context, config: Config): void;
