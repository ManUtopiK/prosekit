<script lang="ts">
import '@prosekit/web/autocomplete'
import { defaultAutocompleteEmptyProps } from '@prosekit/web/autocomplete'
import { useWebComponent } from '../../utils/use-web-component'

let attributes: Record<string, unknown> = {}
let element: HTMLElement | undefined = undefined
const handleChange = useWebComponent(defaultAutocompleteEmptyProps)

$: {
  attributes = handleChange(element, $$props)
}
</script>

<prosekit-autocomplete-empty {...attributes} bind:this={element}>
  <slot />
</prosekit-autocomplete-empty>
