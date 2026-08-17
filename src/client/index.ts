/**
 * Molecule viewer client plugin, browser half.
 *
 * Registers the keyed `tool.call.toolview` renderer for the `view_molecule`
 * tool: the host persists the UI payload (raw molecular data, initial style)
 * inside the `tool/result` event's `presentationMeta` projection, so this
 * renderer reads `block.meta` and builds a MoleculeView (3Dmol.js interactive
 * viewer). Because the payload rides a first-class event type, the viewer
 * re-renders after restarts on stock harness installs — no custom session
 * event, no harness patch.
 *
 * Export discipline: packages/client/AGENTS.md — only `apply`/`inject` plus
 * store-factory type-only exports.
 * @module @dsh-plugins/dsh-molecule-viewer/client
 */

import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
// Type-only: pulls the `tool.call.toolview` SlotMap merge plus the props type.
import type { ToolCallViewProps } from '@deepseek-ai/dsh-client-ui-tool/client'
import { createElement } from 'react'
import { MoleculeView } from './MoleculeView.tsx'
import { isMoleculeViewMeta, type MoleculeViewMeta } from './contract/types.ts'

export type { MoleculeViewMeta } from './contract/types.ts'

/** Required service: the slot registry owning the keyed toolview seat. */
export const inject = ['slots']

const S = {
  note: { padding: '10px 12px', color: '#8888aa', fontSize: '12px', width: '100%', boxSizing: 'border-box' as const },
  err: { padding: '10px 12px', color: '#e74c3c', fontSize: '12px', width: '100%', boxSizing: 'border-box' as const },
}

/** First text block of the settled result, for the degraded summary rows. */
function firstText(content: readonly unknown[]): string {
  for (const block of content) {
    if (block !== null && typeof block === 'object' && typeof (block as { text?: unknown }).text === 'string') {
      return (block as { text: string }).text
    }
  }
  return ''
}

/**
 * Render one `view_molecule` call as an interactive 3Dmol.js viewer.
 *
 * This is the keyed renderer registered against `tool.call.toolview`. It
 * receives the call's frozen running-or-settled block; the settled block's
 * `meta` carries the host-projected molecule payload.
 */
function MoleculeToolRow({ block }: ToolCallViewProps) {
  // Running call: no result yet — a lightweight pending row until it lands.
  if (!('kind' in block)) {
    return createElement('div', { style: S.note }, 'Loading molecule viewer…')
  }

  const meta: unknown = block.meta

  if (isMoleculeViewMeta(meta)) {
    if (!meta.ok) {
      return createElement('div', { style: S.err }, `Molecule view failed: ${meta.error ?? 'unknown error'}`)
    }
    if (meta.data !== undefined) {
      return createElement(MoleculeView, {
        data: meta.data,
        format: meta.format,
        ...(meta.name !== undefined ? { name: meta.name } : {}),
        atomCount: meta.atomCount,
        initialStyle: meta.style,
      })
    }
    const reason = meta.truncated === true
      ? `molecule too large to inline (${meta.format.toUpperCase()}, ${meta.atomCount} atoms) — summary only`
      : `molecular content unavailable (${meta.format.toUpperCase()}, ${meta.atomCount} atoms) — summary only`
    return createElement('div', { style: S.note }, reason)
  }

  // Degraded arm: the payload is absent or from an incompatible plugin
  // version (e.g. a call made before this renderer existed). Never return
  // null — an empty row would silently swallow the call.
  const legacy = meta !== null && typeof meta === 'object' ? meta as Record<string, unknown> : undefined
  if (legacy !== undefined && typeof legacy['format'] === 'string' && typeof legacy['atomCount'] === 'number') {
    return createElement('div', { style: S.note },
      `${String(legacy['format']).toUpperCase()} · ${legacy['atomCount']} atoms — viewer payload unavailable (older call)`)
  }
  const text = firstText(block.content)
  return createElement('div', { style: S.note }, text !== '' ? text : 'Molecule view completed.')
}

/**
 * Client plugin body: register the molecule renderer under the
 * `view_molecule` key of the keyed toolview slot.
 * @param ctx - client root context.
 */
export function apply(ctx: ClientContext): void {
  ctx.slots.inject('tool.call.toolview', () => ctx.slots.register({
    name: 'tool.call.toolview',
    key: 'view_molecule',
  }, MoleculeToolRow))
}
