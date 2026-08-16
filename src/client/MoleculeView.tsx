/** Interactive 3D molecule viewer React component (inline styles, no CSS Modules).
 * User-adjustable background color and molecule color mode (element / spectrum / custom).
 * Cartoon mode renders protein as cartoon AND hetero atoms (ligands) as sticks, so
 * co-crystallized small molecules stay visible. All viewer calls are guarded —
 * a bad style spec must never break the React tree. */
import { useEffect, useRef, useState, type CSSProperties, type ReactElement } from 'react'
import { load3Dmol } from './threeDmol.ts'
import type { MoleculeFormat, MoleculeStyle } from './contract/types.ts'

export interface MoleculeViewProps {
  readonly data: string
  readonly format: MoleculeFormat
  readonly name?: string
  readonly atomCount?: number
  readonly initialStyle: MoleculeStyle
}

const STYLE_OPTIONS: readonly { readonly value: MoleculeStyle; readonly label: string }[] = [
  { value: 'stick', label: 'Stick' }, { value: 'line', label: 'Line' },
  { value: 'sphere', label: 'Sphere' }, { value: 'cartoon', label: 'Cartoon' },
]

/** Molecule coloring modes. */
type ColorMode =
  | { readonly kind: 'element' }
  | { readonly kind: 'spectrum' }
  | { readonly kind: 'custom'; readonly color: string }

/** Color portion of a 3Dmol style spec. `spectrum` rides the `color` key (the
 * library checks `spec.color === 'spectrum'` for its residue gradient); element
 * mode passes no color so the built-in element colors apply. */
function colorSpec(mode: ColorMode): Record<string, unknown> {
  if (mode.kind === 'spectrum') return { color: 'spectrum' }
  if (mode.kind === 'custom') return { color: mode.color }
  return {}
}

/** One representation spec for `style` merged with the color mode. */
function reprSpec(style: MoleculeStyle, mode: ColorMode): Record<string, unknown> {
  const c = colorSpec(mode)
  switch (style) {
    case 'stick': return { stick: c }
    case 'line': return { line: c }
    case 'sphere': return { sphere: { ...c, scale: 0.3 } }
    case 'cartoon': return { cartoon: c }
    default: return { stick: c }
  }
}

/** Is this atom from a HETATM record / a standalone small molecule? Such atoms
 * have no secondary structure, so a cartoon-only style renders nothing. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isHetero(atom: any): boolean {
  return atom !== null && typeof atom === 'object' && atom.hetflag === true
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyStyle(viewer: any, style: MoleculeStyle, mode: ColorMode): void {
  if (style === 'cartoon') {
    // Protein (non-het) atoms: cartoon. Het atoms (ligands, or every atom of a
    // pure small-molecule file): stick — replaces the cartoon for them, so a
    // co-crystallized ligand stays visible next to the protein ribbon.
    viewer.setStyle({}, { cartoon: colorSpec(mode) })
    viewer.setStyle({ predicate: isHetero }, { stick: colorSpec(mode) })
  } else {
    viewer.setStyle({}, reprSpec(style, mode))
  }
}

const BG_PRESETS: readonly string[] = ['#ffffff', '#f0f0f5', '#808080', '#1a1a2e', '#000000']
const DEFAULT_BG = '#1a1a2e'

const S = {
  viewer: { display: 'flex', flexDirection: 'column' as const, width: '100%', border: '1px solid #383856', borderRadius: '8px', overflow: 'hidden', background: '#16213e' },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: '#16213e', borderBottom: '1px solid #383856', gap: '8px' },
  toolbar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '6px 12px', padding: '6px 12px', background: '#131a30', borderBottom: '1px solid #383856' },
  titleRow: { display: 'flex', alignItems: 'center', minWidth: 0 },
  title: { fontSize: '13px', fontWeight: 600, color: '#e0e0e0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const },
  meta: { fontSize: '11px', color: '#8888aa', marginLeft: '8px', flexShrink: 0 },
  controls: { display: 'flex', gap: '4px', flexShrink: 0 },
  btn: { padding: '3px 8px', fontSize: '11px', border: '1px solid #444466', borderRadius: '4px', background: 'transparent', color: '#8888aa', cursor: 'pointer' },
  btnActive: { background: '#4D6BFE', color: '#ffffff', borderColor: '#4D6BFE' },
  group: { display: 'flex', alignItems: 'center', gap: '5px' },
  groupLabel: { fontSize: '11px', color: '#8888aa', userSelect: 'none' as const },
  swatch: { width: '18px', height: '18px', borderRadius: '4px', border: '2px solid transparent', cursor: 'pointer', padding: 0 },
  swatchActive: { borderColor: '#4D6BFE' },
  colorInput: { width: '22px', height: '20px', padding: 0, border: '1px solid #444466', borderRadius: '4px', background: 'transparent', cursor: 'pointer' },
  canvas: { width: '100%', height: '400px', position: 'relative' as const },
  msg: { padding: '24px', textAlign: 'center' as const, color: '#8888aa', fontSize: '13px' },
  err: { padding: '24px', textAlign: 'center' as const, color: '#e74c3c', fontSize: '13px' },
}

function btnStyle(active: boolean, disabled?: boolean): CSSProperties {
  return { ...S.btn, ...(active ? S.btnActive : {}), ...(disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}) }
}

/**
 * Wait until the container has a non-zero layout box.
 *
 * Creating a 3Dmol viewer on a zero-size element sizes its WebGL canvas to
 * zero, making the framebuffer incomplete (`GL_INVALID_FRAMEBUFFER_OPERATION:
 * glClear: Attachment has zero size` on every frame) and the canvas stays
 * blank. The chat list mounts nodes before layout (and replayed sessions may
 * sit in collapsed/hidden ancestors), so creation must wait for a real box.
 *
 * A synchronous check first (layout is usually done by effect time), then a
 * ResizeObserver (fires on the 0 → non-zero transition) plus a rAF poll as
 * belt-and-braces. Rejects when the component unmounts while waiting.
 */
function awaitLayoutBox(el: HTMLElement, isCancelled: () => boolean): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    let observer: ResizeObserver | undefined
    let raf = 0
    const settle = (err?: Error): void => {
      if (raf !== 0) cancelAnimationFrame(raf)
      observer?.disconnect()
      if (err === undefined) resolve()
      else reject(err)
    }
    const check = (): boolean => {
      if (isCancelled()) {
        settle(new Error('molecule viewer unmounted before its container was laid out'))
        return true
      }
      if (el.clientWidth > 0 && el.clientHeight > 0) {
        settle()
        return true
      }
      return false
    }
    if (check()) return
    observer = new ResizeObserver(() => { check() })
    observer.observe(el)
    const tick = (): void => { if (!check()) raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
  })
}

export function MoleculeView({ data, format, name, atomCount, initialStyle }: MoleculeViewProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const viewerRef = useRef<any>(null)
  const [style, setStyle] = useState<MoleculeStyle>(initialStyle)
  const [colorMode, setColorMode] = useState<ColorMode>({ kind: 'element' })
  const [bg, setBg] = useState<string>(DEFAULT_BG)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [errorMsg, setErrorMsg] = useState('')

  // Create viewer and parse molecule on mount / data change.
  useEffect(() => {
    const container = containerRef.current
    if (container === null) return
    setStatus('loading')
    let cancelled = false
    let resizeObserver: ResizeObserver | undefined
    void (async (): Promise<void> => {
      try {
        const m = await load3Dmol()
        if (cancelled) return
        // Wait for a non-zero layout box: a zero-size container produces an
        // incomplete WebGL framebuffer and a permanently blank canvas.
        await awaitLayoutBox(container, () => cancelled)
        if (cancelled) return
        if (viewerRef.current !== null) {
          try { viewerRef.current.clear() } catch { /* replaced below anyway */ }
          viewerRef.current = null
        }
        const v = m.createViewer(container, { backgroundColor: bg, antialias: true })
        viewerRef.current = v
        v.addModel(data, format)
        applyStyle(v, style, colorMode)
        v.zoomTo(); v.render(); v.zoom(1.2, 800)
        if (!cancelled) setStatus('ready')
        // Keep the canvas matched to the container box (chat pane resizes do
        // not always fire window resize, which is all 3Dmol hooks itself).
        resizeObserver = new ResizeObserver(() => {
          if (container.clientWidth === 0 || container.clientHeight === 0) return
          try { v.resize(); v.render() } catch { /* transient — next resize retries */ }
        })
        resizeObserver.observe(container)
      } catch (e) {
        if (!cancelled) { setStatus('error'); setErrorMsg(e instanceof Error ? e.message : String(e)) }
      }
    })()
    return (): void => {
      cancelled = true
      resizeObserver?.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, format])

  // Re-apply style + color mode without re-parsing. Guarded: a failing spec
  // must degrade to no-op, never crash the component tree.
  useEffect(() => {
    const v = viewerRef.current
    if (v === null || status !== 'ready') return
    try { applyStyle(v, style, colorMode); v.render() } catch { /* keep last good style */ }
  }, [style, colorMode, status])

  // Re-apply background color.
  useEffect(() => {
    const v = viewerRef.current
    if (v === null || status !== 'ready') return
    try { v.setBackgroundColor(bg); v.render() } catch { /* keep last good bg */ }
  }, [bg, status])

  // Teardown on unmount.
  useEffect(() => {
    return (): void => {
      const v = viewerRef.current
      if (v !== null) { try { v.clear() } catch { /* gone */ } }
      viewerRef.current = null
    }
  }, [])

  const title = name ?? `Molecule (${format.toUpperCase()})`
  const meta = atomCount !== undefined ? `${atomCount} atoms` : format.toUpperCase()
  const busy = status !== 'ready'

  return (
    <div style={S.viewer}>
      <div style={S.header}>
        <div style={S.titleRow}><span style={S.title}>{title}</span><span style={S.meta}>{meta}</span></div>
        <div style={S.controls}>
          {STYLE_OPTIONS.map((o) => (
            <button key={o.value} type="button" style={btnStyle(style === o.value, busy)}
              onClick={(): void => setStyle(o.value)} disabled={busy}>{o.label}</button>
          ))}
        </div>
      </div>
      <div style={S.toolbar}>
        <div style={S.group}>
          <span style={S.groupLabel}>背景</span>
          {BG_PRESETS.map((c) => (
            <button key={c} type="button" aria-label={`背景 ${c}`}
              style={{ ...S.swatch, background: c, ...(bg.toLowerCase() === c ? S.swatchActive : {}) }}
              onClick={(): void => setBg(c)} disabled={busy} />
          ))}
          <input type="color" value={bg} aria-label="自定义背景色" style={S.colorInput}
            onChange={(e): void => setBg(e.target.value)} disabled={busy} />
        </div>
        <div style={S.group}>
          <span style={S.groupLabel}>分子颜色</span>
          <button type="button" style={btnStyle(colorMode.kind === 'element', busy)}
            onClick={(): void => setColorMode({ kind: 'element' })} disabled={busy}>元素</button>
          <button type="button" style={btnStyle(colorMode.kind === 'spectrum', busy)}
            onClick={(): void => setColorMode({ kind: 'spectrum' })} disabled={busy}>彩虹</button>
          <button type="button" style={btnStyle(colorMode.kind === 'custom', busy)}
            onClick={(): void => setColorMode({ kind: 'custom', color: '#4D6BFE' })} disabled={busy}>自选</button>
          {colorMode.kind === 'custom' && (
            <input type="color" value={colorMode.color} aria-label="自定义分子颜色" style={S.colorInput}
              onChange={(e): void => setColorMode({ kind: 'custom', color: e.target.value })} disabled={busy} />
          )}
        </div>
      </div>
      <div style={{ ...S.canvas, background: bg }} ref={containerRef} />
      {status === 'loading' && <div style={S.msg}>Loading 3D viewer…</div>}
      {status === 'error' && <div style={S.err}>Failed to render: {errorMsg}</div>}
    </div>
  )
}
