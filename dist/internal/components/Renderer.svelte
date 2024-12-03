<!--
	@component
	This component wraps the Carta renderer and provides a debounced rendering
	for the editor.
-->

<script>import { createEventDispatcher, onMount } from "svelte";
import { debounce } from "../utils";
export let carta;
export let value;
export let elem;
export let hidden = false;
let mounted = false;
let renderedHtml = carta.renderSSR(value);
const debouncedRenderer = debounce((value2) => {
  carta.render(value2).then((rendered) => {
    renderedHtml = "";
    renderedHtml = rendered;
  }).then(() => events("render", void 0));
}, carta.rendererDebounce ?? 300);
const onValueChange = (value2) => {
  debouncedRenderer(value2);
};
$: if (mounted) onValueChange(value);
onMount(() => carta.$setRenderer(elem));
onMount(() => mounted = true);
const events = createEventDispatcher();
</script>

<div
	class="carta-renderer markdown-body"
	style="display: {hidden ? 'none' : 'unset'};"
	bind:this={elem}
	on:scroll
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html renderedHtml}
	{#if mounted}
		<slot />
	{/if}
</div>

<style>
	.carta-renderer {
		position: relative;
		word-wrap: break-word;
		word-break: break-word;
	}
</style>
