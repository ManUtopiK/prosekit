export { toggleMark } from './commands/toggle-mark'
export { Editor, createEditor, type EditorOptions } from './editor/editor'
export { Facet, FacetExtension, type FacetOptions } from './editor/facet'
export { defineExtension } from './editor/type-utils'
export { withPriority } from './editor/with-priority'
export { ProseKitError } from './error'
export { addBaseCommands, addCommands } from './extensions/command'
export { addDoc } from './extensions/doc'
export { addInputRule } from './extensions/input-rules'
export { addBaseKeymap, addKeymap, type Keymap } from './extensions/keymap'
export { addMarkSpec, type MarkSpecOptions } from './extensions/mark-spec'
export { addNodeSpec, type NodeSpecOptions } from './extensions/node-spec'
export { addNodeView, type NodeViewOptions } from './extensions/node-view'
export { addParagraph } from './extensions/paragraph'
export { addPlugin, type PluginOptions } from './extensions/plugin'
export { addText } from './extensions/text'
export { type CommandArgs as CommandArgs } from './types/command'
export * from './types/editor'
export {
  type Extension,
  type ExtractCommandCreators,
  type ExtractCommandDispatchers,
  type ExtractMarks,
  type ExtractNodes,
} from './types/extension'
export { type ExtensionTyping } from './types/extension-typing'
export { Priority } from './types/priority'
export { type SimplifyUnion } from './types/simplify-union'
export { getMarkType } from './utils/get-mark-type'
export { getNodeType } from './utils/get-node-type'