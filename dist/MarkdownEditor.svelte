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

	type Mode = 'tabs' | 'split' | 'auto';
	type Tab = 'write' | 'preview';

	interface ComponentConfig {
		parent: string | string[];
		component: any;
		props: any;
	}

	interface MountEvent
		extends CustomEvent<{
			resize?: () => void;
			elem: HTMLDivElement;
		}> {}

	interface ScrollEvent
		extends CustomEvent<{
			target: HTMLDivElement;
		}> {}

	interface RenderEvent extends CustomEvent<void> {}

	const props = $props<{
		carta: Carta;
		theme?: string;
		value?: string;
		mode?: Mode;
		scroll?: 'sync' | 'async';
		disableToolbar?: boolean;
		placeholder?: string;
		textarea?: TextAreaProps;
		selectedTab?: Tab;
		labels?: Partial<Labels>;
	}>();

	const {
		carta,
		theme = 'default',
		value: initialValue = '',
		mode = 'auto',
		scroll = 'sync',
		disableToolbar = false,
		placeholder = '',
		textarea: textareaProps = {},
		selectedTab: initialSelectedTab = 'write',
		labels: userLabels = {}
	} = props;

	const labels: Labels = {
		...defaultLabels,
		...userLabels
	};

	let width = $state(0);
	let windowMode = $state<'tabs' | 'split'>(mode === 'auto' ? 'tabs' : (mode as 'tabs' | 'split'));

	$effect(() => {
		if (mode === 'auto') {
			windowMode = width > 768 ? 'split' : 'tabs';
		}
	});

	let mounted = $state(false);
	let resizeInput: (() => void) | undefined = undefined;

	let editorElem: HTMLDivElement | undefined = $state(undefined);
	let inputElem: HTMLDivElement | undefined = $state(undefined);
	let rendererElem: HTMLDivElement | undefined = $state(undefined);
	let currentlyScrolling: HTMLDivElement | undefined = $state(undefined);
	let currentScrollPercentage = $state(0);
	let value = $state(initialValue);
	let selectedTab = $state<Tab>(initialSelectedTab);

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
		currentlyScrolling = undefined;
	}, 1000);

	/**
	 * Handle the scroll event to synchronize the scroll between the input and renderer.
	 * @param e The scroll event.
	 */
	function handleScroll(event: ScrollEvent) {
		const target = event.detail.target;
		const [scrolled, scrollTarget] =
			target === inputElem ? [inputElem, rendererElem] : [rendererElem, inputElem];

		if (windowMode !== 'split') return;
		if (scroll !== 'sync') return;
		if (!scrolled || !scrollTarget) return;

		synchronizeScroll(scrolled, scrollTarget);
	}

	/**
	 * Synchronize the scroll between the input and renderer.
	 * @param scrolled The element that is scrolled.
	 * @param target The target element to scroll.
	 */
	function synchronizeScroll(scrolled: HTMLDivElement, target: HTMLDivElement) {
		const percentage = calculateScrollPercentage(scrolled);
		currentScrollPercentage = percentage;
		if (currentlyScrolling && currentlyScrolling !== scrolled) return;

		currentlyScrolling = scrolled;
		const targetAvbSpace = target.scrollHeight - target.clientHeight;

		target.scrollTo({ top: percentage * targetAvbSpace, behavior: 'auto' });
		clearCurrentlyScrolling();
	}

	/**
	 * Load the scroll position of the selected tab.
	 * @param tab The tab to load the scroll position.
	 */
	function loadScrollPosition(tab: Tab) {
		if (windowMode !== 'tabs') return;
		const elem = tab === 'write' ? inputElem : rendererElem;
		if (!elem) return;

		const avbSpace = elem.scrollHeight - elem.clientHeight;
		elem.scroll({ top: avbSpace * currentScrollPercentage, behavior: 'instant' });
	}

	onMount(() => {
		if (editorElem) carta.$setElement(editorElem);
		mounted = true;
	});

	function handleInputMount(event: MountEvent) {
		if (event.detail.resize) resizeInput = event.detail.resize;
		inputElem = event.detail.elem;
	}

	function handleRendererMount(event: MountEvent) {
		rendererElem = event.detail.elem;
	}
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
				{value}
				props={textareaProps}
				hidden={!(windowMode === 'split' || selectedTab === 'write')}
				on:scroll={(e) => handleScroll(e)}
				on:mount={(e) => handleInputMount(e)}
			>
				{#if mounted}
					{#each carta.components.filter((comp: ComponentConfig) => [comp.parent]
							.flat()
							.includes('input')) as { component: Comp, props: compProps }}
						<svelte:element this={Comp} {carta} {...compProps} />
					{/each}
				{/if}
			</Input>
			<Renderer
				{carta}
				{value}
				hidden={!(windowMode === 'split' || selectedTab === 'preview')}
				on:scroll={(e) => handleScroll(e)}
				on:mount={(e) => handleRendererMount(e)}
				on:render={() => {
					if (windowMode !== 'split') return;
					if (scroll !== 'sync') return;
					if (!inputElem || !rendererElem) return;
					synchronizeScroll(inputElem, rendererElem);
				}}
			>
				{#if mounted}
					{#each carta.components.filter((comp: ComponentConfig) => [comp.parent]
							.flat()
							.includes('renderer')) as { component: Comp, props: compProps }}
						<svelte:element this={Comp} {carta} {...compProps} />
					{/each}
				{/if}
			</Renderer>
		</div>
	</div>

	{#if mounted}
		{#each carta.components.filter((comp: ComponentConfig) => [comp.parent]
				.flat()
				.includes('editor')) as { component: Comp, props: compProps }}
			<svelte:element this={Comp} {carta} {...compProps} />
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
