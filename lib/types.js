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
/** Marker distinguishing this tool's meta from every other tool's payload. */
export const MOLECULE_META_KIND = 'molecule-view';
//# sourceMappingURL=types.js.map