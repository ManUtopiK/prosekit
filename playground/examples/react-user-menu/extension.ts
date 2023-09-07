import { addBasicExtension } from 'prosekit/basic'
import { defineExtension } from 'prosekit/core'
import { addMention } from 'prosekit/extensions/mention'
import { addPlaceholder } from 'prosekit/extensions/placeholder'

export function addExampleExtension() {
  return defineExtension([
    addBasicExtension(),
    addPlaceholder({ placeholder: 'Type @ to metion someone...' }),
    addMention(),
  ])
}

export type ExampleExtension = ReturnType<typeof addExampleExtension>
