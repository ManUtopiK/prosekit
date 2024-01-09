import type { ContentMatch } from '@prosekit/pm/model'

/**
 * @deprecated Use the one from `@prosekit/core` instead.
 */
export function defaultBlockAt(match: ContentMatch) {
  for (let i = 0; i < match.edgeCount; i++) {
    const { type } = match.edge(i)
    if (type.isTextblock && !type.hasRequiredAttrs()) return type
  }
  return null
}
