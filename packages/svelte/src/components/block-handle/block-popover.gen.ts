import type { BlockPopoverProps } from '@prosekit/web/block-handle'    
import type { SvelteComponent } from 'svelte'

import Component from './block-popover.gen.svelte'

export const BlockPopover = Component as typeof SvelteComponent<any> as typeof SvelteComponent<Partial<BlockPopoverProps> & {class?: string}>
