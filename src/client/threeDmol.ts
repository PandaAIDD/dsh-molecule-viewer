/**
 * Local loader for 3Dmol.js.
 *
 * 3Dmol 2.4.2 is vendored (`vendor/3Dmol-min.cjs`, CommonJS extension so the
 * webpack-UMD build parses as CJS inside this ESM package) and compiled into
 * the client bundle at build time — no runtime CDN fetch, so rendering starts
 * immediately, works offline, and is immune to tracking-prevention storage
 * blocks. The 2.x webpack-UMD build assigns its namespace to
 * `module.exports` when bundled (`t["3Dmol"]=e()` only as a browser-global
 * fallback); older classic builds mounted `$3Dmol` globals. The loader
 * prefers the bundled namespace and reuses any already-present global.
 * @module threeDmol
 */

/** The 3Dmol.js namespace once resolved. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThreeDMol = any

declare global {
  interface Window {
    _$3Dmol?: ThreeDMol
    $3Dmol?: ThreeDMol
    '3Dmol'?: ThreeDMol
  }
}

/** The namespace compiled in from vendor/3Dmol-min.cjs at build time. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import bundled from '../../vendor/3Dmol-min.cjs'

/** Cached resolution: the same namespace object for every caller. */
let resolved: ThreeDMol | undefined

/**
 * Whether a candidate exposes the viewer factory we need.
 * @param candidate - namespace candidate (bundled or global).
 * @returns true when `createViewer` is callable on it.
 */
function isValid(candidate: ThreeDMol | undefined): boolean {
  return candidate !== undefined && typeof candidate.createViewer === 'function'
}

/**
 * Find an already-mounted 3Dmol namespace under any known global name.
 * @returns the validated namespace, or undefined when absent/invalid.
 */
function findLoaded(): ThreeDMol | undefined {
  if (typeof window === 'undefined') return undefined
  // Digit-leading "3Dmol" needs bracket access; classic builds use $3Dmol.
  const candidates: ThreeDMol[] = [
    window['3Dmol'],
    window.$3Dmol,
    window._$3Dmol,
  ]
  return candidates.find(isValid)
}

/**
 * Resolve the 3Dmol.js namespace (fully local — no network access).
 * Kept Promise-shaped so callers stay uniform.
 * @returns the 3Dmol namespace.
 */
export function load3Dmol(): Promise<ThreeDMol> {
  if (isValid(resolved)) return Promise.resolve(resolved)
  if (isValid(bundled)) {
    resolved = bundled
    return Promise.resolve(bundled)
  }
  const preloaded = findLoaded()
  if (preloaded !== undefined) {
    resolved = preloaded
    return Promise.resolve(preloaded)
  }
  return Promise.reject(
    new Error('3Dmol.js namespace missing from the client bundle and no usable global (3Dmol / $3Dmol / _$3Dmol) with createViewer was found'),
  )
}
