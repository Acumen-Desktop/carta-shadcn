<!-- @migration-task Error while migrating Svelte code: Cannot overwrite a zero-length range – use appendLeft or prependRight instead -->
<!-- @migration-task Error while migrating Svelte code: Cannot overwrite a zero-length range – use appendLeft or prependRight instead -->
<!--
	@component
	This is the main editor component that combines the input and renderer
	components. It also handles the scroll synchronization between the input and renderer
	components (if set to sync), and the window mode management (tabs or split).
-->

<script lang="ts">
	import type { Carta } from './internal/carta';
	import { onMount } from 'svelte';
	import Renderer from './internal/components/Renderer.svelte';
	import Input from './internal/components/Input.svelte';
	import { debounce } from './internal/utils';
	import type { TextAreaProps } from './internal/textarea-props';
	import { defaultLabels, type Labels } from './internal/labels';
	import Toolbar from './internal/components/Toolbar.svelte';

	const {
		carta,
		theme = 'default',
		value: initialValue = '',
		mode = 'auto',
		scroll = 'sync',
		disableToolbar = false,
		placeholder = '',
		textarea: textareaProps = {},
		selectedTab = 'write',
		labels: userLabels = {}
	} = $props<{
		carta: Carta;
		theme?: string;
		value?: string;
		mode?: 'tabs' | 'split' | 'auto';
		scroll?: 'sync' | 'async';
		disableToolbar?: boolean;
		placeholder?: string;
		textarea?: TextAreaProps;
		selectedTab?: 'write' | 'preview';
		labels?: Partial<Labels>;
	}>();

	const labels: Labels = {
		...defaultLabels,
		...userLabels
	};

	let width = $state(0);
	let windowMode: 'tabs' | 'split' = $derived(
		mode === 'auto' ? (width > 768 ? 'split' : 'tabs') : mode
	);
	let mounted = $state(false);
	let resizeInput: (() => void) | undefined;

	let editorElem: HTMLDivElement | null = $state(null);
	let inputElem: HTMLDivElement | null = $state(null);
	let rendererElem: HTMLDivElement | null = $state(null);
	let currentlyScrolling: HTMLDivElement | null = $state(null);
	let currentScrollPercentage = $state(0);
	let value = $state(initialValue);
	let selectedTab = $state(selectedTab);

	$effect(() => {
		if (inputElem && rendererElem) {
			loadScrollPosition(selectedTab);
		}
	});

	$effect(() => {
		if (resizeInput) {
			resizeInput();
		}
	});

	/**
	 * Calculate the scroll percentage of an element.
	 * @param elem The element to calculate the scroll percentage.
	 */
	function calculateScrollPercentage(elem: HTMLDivElement) {
		const scrolledAvbSpace = elem.scrollHeight - elem.clientHeight;
		const scrolledAmount = elem.scrollTop * (1 + elem.clientHeight / scrolledAvbSpace);
		return scrolledAmount / elem.scrollHeight;
	}

	/**
	 * Start a debounce to clear the currently scrolling element, so that it executed
	 * only once after the last scroll event.
	 */
	const clearCurrentlyScrolling = debounce(() => {
		currentlyScrolling = null;
	}, 1000);

	/**
	 * Handle the scroll event to synchronize the scroll between the input and renderer.
	 * @param e The scroll event.
	 */
	function handleScroll(e: Event) {
		const [scrolled, target] =
			e.target == inputElem ? [inputElem, rendererElem] : [rendererElem, inputElem];

		if (windowMode != 'split') return;
		if (scroll != 'sync') return;

		synchronizeScroll(scrolled, target);
	}

	/**
	 * Synchronize the scroll between the input and renderer.
	 * @param scrolled The element that is scrolled.
	 * @param target The target element to scroll.
	 */
	function synchronizeScroll(scrolled: HTMLDivElement, target: HTMLDivElement) {
		const percentage = calculateScrollPercentage(scrolled);
		currentScrollPercentage = percentage;
		// Return if the scrolled is caused by a previous scrollTo
		if (currentlyScrolling && currentlyScrolling != scrolled) return;

		currentlyScrolling = scrolled;
		const targetAvbSpace = target.scrollHeight - target.clientHeight;

		target.scrollTo({ top: percentage * targetAvbSpace, behavior: 'auto' });
		clearCurrentlyScrolling();
	}

	/**
	 * Load the scroll position of the selected tab.
	 * @param tab The tab to load the scroll position.
	 */
	function loadScrollPosition(tab: 'write' | 'preview') {
		if (windowMode !== 'tabs') return;
		const elem = tab === 'write' ? inputElem : rendererElem;
		if (!elem) return;

		const avbSpace = elem.scrollHeight - elem.clientHeight;
		elem.scroll({ top: avbSpace * currentScrollPercentage, behavior: 'instant' });
	}

	onMount(() => carta.$setElement(editorElem));
	onMount(() => (mounted = true));
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
				props={textareaProps}
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
