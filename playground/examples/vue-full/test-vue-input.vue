<script setup lang="ts">
import type { VueNodeViewProps } from 'prosekit/vue'
import { computed, ref } from 'vue'

const props = defineProps<VueNodeViewProps>()
const value = ref('')
</script>

<template>
<div contenteditable="false">
  <div>Test input vue :</div>
  <input v-model="value" class="border" />
</div>
</template>
