import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: Record<string, never>;
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type MarkdownEditorProps = typeof __propDef.props;
export type MarkdownEditorEvents = typeof __propDef.events;
export type MarkdownEditorSlots = typeof __propDef.slots;
/**
 * This is the main editor component that combines the input and renderer
 * components. It also handles the scroll synchronization between the input and renderer
 * components (if set to sync), and the window mode management (tabs or split).
 */
export default class MarkdownEditor extends SvelteComponentTyped<
	MarkdownEditorProps,
	MarkdownEditorEvents,
	MarkdownEditorSlots
> {}
export {};
