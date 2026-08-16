/**
 * Package-owned invariant companion for `@dsh-plugins/dsh-molecule-viewer`.
 * @module @dsh-plugins/dsh-molecule-viewer/invariant
 */
const PACKAGE_NAME = '@dsh-plugins/dsh-molecule-viewer';
/** Cordis companion plugin name. */
export const name = 'molecule-viewer-invariant';
/** Service required before the companion can reserve package ownership. */
export const inject = ['invariants'];
/**
 * No runtime invariant: the Conversation Node registration and keyed renderer
 * are effects owned and observed by their respective registries.
 */
const install = () => { };
/**
 * Register this package's invariant companion.
 * @param ctx - Cordis context carrying the invariant service.
 * @returns The installed registration's disposer after setup succeeds.
 */
export const apply = (ctx) => Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install));
/* jscpd:ignore-end */
//# sourceMappingURL=invariant.js.map