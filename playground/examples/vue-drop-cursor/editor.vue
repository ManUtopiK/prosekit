<script setup lang="ts">
import { Themes } from '@prosekit/themes'
import 'prosekit/basic/style.css'

import { createEditor } from 'prosekit/core'
import { ProseKit } from 'prosekit/vue'
import { ref, watchPostEffect } from 'vue'
import { defineExtension } from './extension'
import { defaultDoc } from './default-doc'

const editor = createEditor({ extension: defineExtension(), defaultDoc })
const editorRef = ref<HTMLDivElement | null>(null)
watchPostEffect((onCleanup) => {
  editor.mount(editorRef.value)
  onCleanup(() => editor.unmount())
})
</script>

<template>
  <ProseKit :editor="editor">
    <div :class="Themes.EDITOR_VIEWPORT">
      <div :class="Themes.EDITOR_SCROLLING">
        <div ref="editorRef" :class="Themes.EDITOR_CONTENT"></div>
      </div>
    </div>
  </ProseKit>
</template>
