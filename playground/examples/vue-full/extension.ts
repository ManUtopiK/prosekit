import { defineBasicExtension } from 'prosekit/basic'
import { defineCommands, defineNodeSpec, insertNode, union } from 'prosekit/core'
import {
  defineCodeBlock,
  defineCodeBlockShiki,
} from 'prosekit/extensions/code-block'
import { defineMention } from 'prosekit/extensions/mention'
import { definePlaceholder } from 'prosekit/extensions/placeholder'
import { defineVueNodeView, type VueNodeViewComponent } from 'prosekit/vue'

import CodeBlockView from './code-block-view.vue'
import testVueInput from './test-vue-input.vue'

export function defineExtension() {
  return union([
    defineBasicExtension(),
    definePlaceholder({ placeholder: 'Press / for commands...' }),
    defineMention(),
    defineCodeBlock(),
    defineCodeBlockShiki(),
    defineVueNodeView({
      name: 'codeBlock',
      contentAs: 'code',
      component: CodeBlockView as VueNodeViewComponent,
    }),
    defineNodeSpec({
      name: 'testVueInput',
      content: 'block*',
      group: 'block',
      parseDOM: [{ tag: 'div' }],
      toDOM() {
        return ['div']
      },
    }),
    defineVueNodeView({
      name: 'testVueInput',
      contentAs: 'div',
      component: testVueInput as VueNodeViewComponent,
    }),
    defineCommands({
      insertTestVueInput: () => {
        return (state, dispatch, view) => {
          return insertNode({ type: 'testVueInput' })(state, dispatch, view)
        }
      },
    })
  ])
}

export type EditorExtension = ReturnType<typeof defineExtension>
