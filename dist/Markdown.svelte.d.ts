import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: Record<string, never>;
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type MarkdownProps = typeof __propDef.props;
export type MarkdownEvents = typeof __propDef.events;
export type MarkdownSlots = typeof __propDef.slots;
/**
 * This component is used to render Markdown once after being parsed twice
 * by Carta. The first parsing is done in the server-side rendering (SSR) and the
 * second (async) parsing is done in the client-side rendering.
 *
 * This component is not reactive. It is only rendered once. If you want to make it
 * reactive, you need to destroy and recreate it using Svelte #key block.
 */
export default class Markdown extends SvelteComponentTyped<
	MarkdownProps,
	MarkdownEvents,
	MarkdownSlots
> {}
export {};
