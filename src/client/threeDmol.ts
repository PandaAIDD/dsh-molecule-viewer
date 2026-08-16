/**
 * Dynamic loader for 3Dmol.js.
 *
 * Loads from CDN at runtime (not bundled) to keep the client bundle small.
 * The 2.x webpack-UMD build mounts the browser global as "3Dmol"
 * (`t["3Dmol"]=e()`, digit-leading so only bracket access works); older
 * classic builds use "$3Dmol". The loader probes all known names and
 * validates the namespace exposes createViewer.
 * @module threeDmol
 */

/** The 3Dmol.js namespace once loaded. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThreeDMol = any

declare global {
  interface Window {
    _$3Dmol?: ThreeDMol
    $3Dmol?: ThreeDMol
    '3Dmol'?: ThreeDMol
  }
}

/** CDN candidates in priority order: jsdelivr first (best CN reachability), cdnjs fallback. */
const CDN_URLS: readonly string[] = [
  'https://cdn.jsdelivr.net/npm/3dmol@2.4.2/build/3Dmol-min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/3Dmol/2.4.2/3Dmol-min.js',
]

let loadPromise: Promise<ThreeDMol> | undefined

/**
 * Find an already-loaded 3Dmol namespace under any known global name.
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
  return candidates.find(m => m !== undefined && typeof m.createViewer === 'function')
}

/**
 * Load 3Dmol.js from CDN (once per page lifetime) and resolve its namespace.
 * @returns the global 3Dmol object.
 */
export function load3Dmol(): Promise<ThreeDMol> {
  if (loadPromise !== undefined) return loadPromise
  loadPromise = (async (): Promise<ThreeDMol> => {
    if (typeof window === 'undefined') {
      throw new Error('3Dmol.js requires a browser environment')
    }
    const preloaded = findLoaded()
    if (preloaded !== undefined) return preloaded
    // Try each CDN in order; only fail when every candidate failed.
    let lastError: unknown = undefined
    for (const url of CDN_URLS) {
      try {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = url
          script.async = true
          script.onload = (): void => resolve()
          script.onerror = (): void => reject(new Error(`failed to load ${url}`))
          document.head.appendChild(script)
        })
        const loaded = findLoaded()
        if (loaded !== undefined) return loaded
        lastError = new Error(`${url} loaded but no usable global namespace (3Dmol / $3Dmol / _$3Dmol) with createViewer was found`)
      } catch (error) {
        lastError = error
      }
    }
    throw new Error(`3Dmol.js could not be loaded from any CDN (${CDN_URLS.join(', ')}): ${lastError instanceof Error ? lastError.message : String(lastError)}`)
  })()
  return loadPromise
}
