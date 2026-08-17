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
import type { Context } from '@deepseek-ai/cordis';
import z from '@deepseek-ai/schemastery';
import { type MoleculeStyle } from './types.ts';
export type { MoleculeFormat, MoleculeStyle, MoleculeViewMeta, ViewMoleculeArgs, ViewMoleculeResult, } from './types.ts';
export { MOLECULE_META_KIND } from './types.ts';
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
