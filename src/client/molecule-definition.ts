/**
 * Conversation Node Definition for molecule view events.
 *
 * Single-event Context (start = terminal): the host emits exactly one
 * `molecule/view` event per tool call. The definition matches on
 * `viewerEventId`, constructs State from the event payload, and publishes
 * the final Chat node data.
 * @module molecule-definition
 */

import type {
  ChatConversationViewNode, ConversationLocation, ConversationNodeContext,
  ConversationNodeDefinition,
} from '@deepseek-ai/dsh-client-runtime/client'
import type { MoleculeChatData, MoleculeViewState } from './contract/types.ts'

// Declaration merge: register our Chat node kind with typed data.
declare module '@deepseek-ai/dsh-client-ui-conversation/client' {
  interface ChatNodeDataMap {
    /** Interactive 3D molecule viewer node. */
    'molecule-view': MoleculeChatData
  }
}

function locationOf(context: ConversationNodeContext): ConversationLocation {
  return context.start?.location ?? context.matches[0]?.location ?? { kind: 'unresolved' }
}

/**
 * Project the node State into final keyed Chat payload.
 */
function viewData(state: MoleculeViewState): MoleculeChatData {
  return {
    viewerEventId: state.viewerEventId,
    format: state.format,
    data: state.data,
    ...(state.name !== undefined ? { name: state.name } : {}),
    atomCount: state.atomCount,
    style: state.style,
  }
}

/** Durable molecule view event folded into one keyed Chat node. */
export const moleculeViewDefinition: ConversationNodeDefinition<MoleculeViewState> = {
  kind: 'molecule-view',
  target: 'chat',
  match: (event) => {
    if (event.type === 'molecule/view') {
      return { id: String(event.data.viewerEventId), role: 'start' }
    }
    return null
  },
  start: (_context, match) => {
    if (match.event.type !== 'molecule/view') {
      throw new Error('molecule-view start requires molecule/view event')
    }
    const data = match.event.data
    return {
      viewerEventId: data.viewerEventId,
      format: data.format,
      data: data.data,
      ...(data.name !== undefined ? { name: data.name } : {}),
      atomCount: 0,
      style: data.style,
      turn: data.turn,
      step: data.step,
    }
  },
  // No update handler needed: single-event Context. Return state unchanged.
  update: (context) => context.state,
  publication: () => 'immediate',
  buildViewNode: (context): ChatConversationViewNode | null => {
    if (context.state === undefined) return null
    return {
      key: context.key,
      kind: 'molecule-view',
      id: context.id,
      target: 'chat',
      anchorSeq: context.start?.event.seq ?? context.matches[0]?.event.seq ?? 0,
      location: locationOf(context),
      visibility: 'visible',
      data: viewData(context.state),
    }
  },
}
