/**
 * Type shim for the vendored 3Dmol.js 2.4.2 UMD build. The namespace is
 * consumed as an opaque `any` (see src/client/threeDmol.ts); this
 * declaration only teaches module resolution about the .js file.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const threeDmolNamespace: any
export default threeDmolNamespace
