<!--
	@component
	This component wraps the Carta renderer and provides a debounced rendering
	for the editor.
-->

<script lang="ts">
	import { run, createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { createEventDispatcher, onMount } from 'svelte';
	import type { Carta } from '../carta';
	import { debounce } from '../utils';

	interface $$Events {
		scroll: CustomEvent<{
			target: HTMLDivElement;
		}>;
		mount: CustomEvent<{
			elem: HTMLDivElement;
		}>;
		render: CustomEvent<void>;
	}

	interface Props {
		carta: any;
		value: string;
		hidden?: boolean;
		children?: import('svelte').Snippet;
	}

	let { carta, value, hidden = false, children }: Props = $props();

	let mounted = $state(false);
	let renderedHtml = $state<string>(carta.renderSSR(value));

	// Debounce the rendering
	const debouncedRenderer = debounce((value: string) => {
		carta
			.render(value)
			.then((rendered: string) => {
				renderedHtml = ''; // Force @html to re-render everything
				renderedHtml = rendered;
			})
			.then(() => {
				const event = new CustomEvent<void>('render', {
					detail: undefined
				});
				dispatch('render', event);
			});
	}, carta.rendererDebounce ?? 300);

	const onValueChange = (value: string) => {
		debouncedRenderer(value);
	};

	run(() => {
		if (mounted) onValueChange(value);
	});

	let elem!: HTMLDivElement;

	onMount(() => {
		if (elem) {
			carta.$setRenderer(elem);
			const event = new CustomEvent('mount', {
				detail: {
					elem
				}
			});
			dispatch('mount', event);
		}
		mounted = true;
	});

	const dispatch = createEventDispatcher<$$Events>();
</script>

<div
	class="carta-renderer markdown-body"
	style="display: {hidden ? 'none' : 'unset'};"
	bind:this={elem}
	onscroll={() => {
		if (elem) {
			const event = new CustomEvent('scroll', {
				detail: { target: elem }
			});
			dispatch('scroll', event);
		}
	}}
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html renderedHtml}
	{#if mounted}
		{@render children?.()}
	{/if}
</div>

<style>
	.carta-renderer {
		position: relative;
		word-wrap: break-word;
		word-break: break-word;
	}
</style>
