/**
 * Molecule viewer client plugin, browser half.
 *
 * Registers the `molecule-view` Conversation Node Definition and its keyed
 * `conversation.chat.node` renderer. The renderer creates a MoleculeView
 * (3Dmol.js interactive viewer) from the node data.
 *
 * Export discipline: packages/client/AGENTS.md — only `apply`/`inject` plus
 * store-factory type-only exports.
 * @module @dsh-plugins/dsh-molecule-viewer/client
 */

import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type { ChatNodeViewProps } from '@deepseek-ai/dsh-client-ui-conversation/client'
// Type-only: pulls the Conversation Node + slot infrastructure Context merge.
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import { createElement } from 'react'
import { MoleculeView } from './MoleculeView.tsx'
import { moleculeViewDefinition } from './molecule-definition.ts'

export type { MoleculeChatData, MoleculeViewState } from './contract/types.ts'

/** Required services: the conversation event registry and the slot registry. */
export const inject = ['conversationEvents', 'slots']

/**
 * Render one molecule-view Chat node as an interactive 3Dmol.js viewer.
 *
 * This is the keyed renderer registered against `conversation.chat.node`.
 * It receives `node.data` (typed as MoleculeChatData) and constructs a
 * MoleculeView with the molecular data and initial style.
 */
function MoleculeViewNode({ node }: ChatNodeViewProps<'molecule-view'>) {
  return createElement(MoleculeView, {
    data: node.data.data,
    format: node.data.format,
    ...(node.data.name !== undefined ? { name: node.data.name } : {}),
    atomCount: node.data.atomCount,
    initialStyle: node.data.style,
  })
}

/**
 * Client plugin body: register the molecule-view Definition and its keyed Chat renderer.
 * @param ctx - client root context.
 */
export function apply(ctx: ClientContext): void {
  // Register the Conversation Node Definition so the assembler matches
  // molecule/view events and publishes molecule-view Chat nodes.
  ctx.conversationEvents.register(moleculeViewDefinition)

  // Register the keyed renderer for 'molecule-view' Chat nodes.
  // The locale and inject fields satisfy the slot contract; our component
  // only reads `node.data` so the inject face is empty.
  ctx.slots.inject('conversation.chat.node', () => ctx.slots.register({
    name: 'conversation.chat.node',
    key: 'molecule-view',
    locale: 'conversation',
    inject: () => ({}),
  }, MoleculeViewNode))
}
