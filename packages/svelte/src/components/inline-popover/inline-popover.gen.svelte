<script lang="ts">
import '@prosekit/web/inline-popover'
import { defaultInlinePopoverProps } from '@prosekit/web/inline-popover'
import { useWebComponent } from '../../utils/use-web-component'

let attributes: Record<string, unknown> = {}
let element: HTMLElement | undefined = undefined
const handleChange = useWebComponent(defaultInlinePopoverProps)

$: {
  attributes = handleChange(element, $$props)
}
</script>

<prosekit-inline-popover {...attributes} bind:this={element}>
  <slot />
</prosekit-inline-popover>
