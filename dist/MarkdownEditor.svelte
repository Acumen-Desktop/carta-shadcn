<!--
	@component
	This is the main editor component that combines the input and renderer
	components. It also handles the scroll synchronization between the input and renderer
	components (if set to sync), and the window mode management (tabs or split).
-->

<script>import { onMount } from "svelte";
import Renderer from "./internal/components/Renderer.svelte";
import Input from "./internal/components/Input.svelte";
import { debounce } from "./internal/utils";
import { defaultLabels } from "./internal/labels";
import Toolbar from "./internal/components/Toolbar.svelte";
export let carta;
export let theme = "default";
export let value = "";
export let mode = "auto";
export let scroll = "sync";
export let disableToolbar = false;
export let placeholder = "";
export let textarea = {};
export let selectedTab = "write";
let userLabels = {};
export { userLabels as labels };
const labels = {
  ...defaultLabels,
  ...userLabels
};
let width;
let windowMode;
let mounted = false;
let resizeInput;
let editorElem;
let inputElem;
let rendererElem;
let currentlyScrolling;
let currentScrollPercentage = 0;
$: {
  windowMode = mode === "auto" ? width > 768 ? "split" : "tabs" : mode;
}
$: {
  windowMode;
  resizeInput && resizeInput();
}
$: {
  inputElem, rendererElem;
  loadScrollPosition(selectedTab);
}
function calculateScrollPercentage(elem) {
  const scrolledAvbSpace = elem.scrollHeight - elem.clientHeight;
  const scrolledAmount = elem.scrollTop * (1 + elem.clientHeight / scrolledAvbSpace);
  return scrolledAmount / elem.scrollHeight;
}
const clearCurrentlyScrolling = debounce(() => {
  currentlyScrolling = null;
}, 1e3);
function handleScroll(e) {
  const [scrolled, target] = e.target == inputElem ? [inputElem, rendererElem] : [rendererElem, inputElem];
  if (windowMode != "split") return;
  if (scroll != "sync") return;
  synchronizeScroll(scrolled, target);
}
function synchronizeScroll(scrolled, target) {
  const percentage = calculateScrollPercentage(scrolled);
  currentScrollPercentage = percentage;
  if (currentlyScrolling && currentlyScrolling != scrolled) return;
  currentlyScrolling = scrolled;
  const targetAvbSpace = target.scrollHeight - target.clientHeight;
  target.scrollTo({ top: percentage * targetAvbSpace, behavior: "auto" });
  clearCurrentlyScrolling();
}
function loadScrollPosition(tab) {
  if (windowMode !== "tabs") return;
  const elem = tab === "write" ? inputElem : rendererElem;
  if (!elem) return;
  const avbSpace = elem.scrollHeight - elem.clientHeight;
  elem.scroll({ top: avbSpace * currentScrollPercentage, behavior: "instant" });
}
onMount(() => carta.$setElement(editorElem));
onMount(() => mounted = true);
</script>

<div bind:this={editorElem} bind:clientWidth={width} class="carta-editor carta-theme__{theme}">
	{#if !disableToolbar}
		<Toolbar {carta} {labels} mode={windowMode} bind:tab={selectedTab} />
	{/if}

	<div class="carta-wrapper">
		<div class="carta-container mode-{windowMode}">
			<Input
				{carta}
				{placeholder}
				props={textarea}
				hidden={!(windowMode == 'split' || selectedTab == 'write')}
				bind:value
				bind:resize={resizeInput}
				bind:elem={inputElem}
				on:scroll={handleScroll}
			>
				<!-- Input extensions components -->
				{#if mounted}
					{#each carta.components.filter(({ parent }) => [parent]
							.flat()
							.includes('input')) as { component, props }}
						<svelte:component this={component} {carta} {...props} />
					{/each}
				{/if}
			</Input>
			<Renderer
				{carta}
				{value}
				hidden={!(windowMode == 'split' || selectedTab == 'preview')}
				bind:elem={rendererElem}
				on:scroll={handleScroll}
				on:render={() => {
					if (windowMode != 'split') return;
					if (scroll != 'sync') return;
					synchronizeScroll(inputElem, rendererElem);
				}}
			>
				<!-- Renderer extensions components -->
				{#if mounted}
					{#each carta.components.filter(({ parent }) => [parent]
							.flat()
							.includes('renderer')) as { component, props }}
						<svelte:component this={component} {carta} {...props} />
					{/each}
				{/if}
			</Renderer>
		</div>
	</div>

	<!-- Editor extensions components -->
	<!-- prevent loading components on ssr renderings -->
	{#if mounted}
		{#each carta.components.filter(({ parent }) => [parent]
				.flat()
				.includes('editor')) as { component, props }}
			<svelte:component this={component} {carta} {...props} />
		{/each}
	{/if}
</div>

<style>
	.carta-editor {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	:global(.carta-container.mode-split > *) {
		width: 50%;
	}

	:global(.carta-container.mode-tabs > *) {
		width: 100%;
	}

	.carta-container {
		display: flex;
		position: relative;
	}
</style>
