import { definePlugin, isApple, type Extension } from '@prosekit/core'
import { Plugin, PluginKey } from '@prosekit/pm/state'
import type { EditorView } from '@prosekit/pm/view'

/**
 * By default, clicking a node while holding the mod key will select the node. This
 * extension disables that behavior.
 *
 * @public
 */
export function defineModClickPrevention(): Extension {
  return definePlugin(new Plugin({ key, props: { handleClick } }))
}

const key = new PluginKey('prosekit-mod-click-prevention')

function handleClick(_view: EditorView, _pos: number, event: MouseEvent) {
  return !!event[selectNodeModifier]
}

const selectNodeModifier: 'metaKey' | 'ctrlKey' = isApple
  ? 'metaKey'
  : 'ctrlKey'
