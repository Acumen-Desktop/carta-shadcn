<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<!--
	@component
	A wrapped textarea component integrated with Carta. It handles the highlighting
	and propagates events to the Carta instance.	
-->

<script lang="ts">
	import { onMount } from 'svelte';
	import type { Carta } from '../carta';
	import type { TextAreaProps } from '../textarea-props';
	import { debounce } from '../utils';
	import { BROWSER } from 'esm-env';
	import { speculativeHighlightUpdate } from '../speculative';
	import { run } from 'svelte/legacy';
	import { createEventDispatcher } from 'svelte';

	interface ScrollEvent extends Event {
		target: HTMLDivElement;
	}

	interface MountEvent
		extends CustomEvent<{
			resize?: () => void;
			elem: HTMLDivElement;
		}> {}

	interface $$Props {
		carta: any;
		placeholder?: string;
		value?: string;
		props?: any;
		hidden?: boolean;
		children?: import('svelte').Snippet;
	}

	interface $$Events {
		scroll: CustomEvent<{
			target: HTMLDivElement;
		}>;
		mount: CustomEvent<{
			resize?: () => void;
			elem: HTMLDivElement;
		}>;
	}

	const dispatch = createEventDispatcher<$$Events>();

	let {
		carta,
		value: initialValue = '',
		placeholder = '',
		props: textareaProps = {},
		hidden = false,
		children
	} = $props();

	let elem!: HTMLDivElement;
	let textarea!: HTMLTextAreaElement;
	let highlightElem!: HTMLDivElement;
	let wrapperElem!: HTMLDivElement;

	let value = $state(initialValue);
	let highlighted = $state('');
	let mounted = $state(false);
	let prevValue = initialValue;

	const simpleUUID = Math.random().toString(36).substring(2);

	/**
	 * Manually resize the textarea to fit the content, so that it
	 * always perfectly overlaps the highlighting overlay.
	 */
	export const resize = () => {
		if (!mounted || !textarea || !elem) return;
		textarea.style.height = '0';
		textarea.style.minHeight = '0';
		textarea.style.height = textarea.scrollHeight + 'px';
		textarea.style.minHeight = wrapperElem.clientHeight + 'px';
		textarea.scrollTop = 0;

		const isFocused = document.activeElement === textarea;
		if (!isFocused || !carta.input || !elem) return;
		const coords = carta.input.getCursorXY();
		if (!coords) return;

		if (
			coords.top < 0 ||
			coords.top + carta.input.getRowHeight() >= elem.scrollTop + elem.clientHeight
		) {
			elem.scrollTo({ top: coords?.top, behavior: 'instant' });
		}
	};

	const focus = () => {
		// Allow text selection
		const selectedText = window.getSelection()?.toString();
		if (selectedText) return;

		textarea?.focus();
	};

	/**
	 * Highlight the text in the textarea.
	 * @param text The text to highlight.
	 */
	const highlight = async (text: string) => {
		const highlighter = await carta.highlighter();
		if (!highlighter) return;
		let html: string;

		const hl = await import('../highlight');
		const { isSingleTheme } = hl;

		if (isSingleTheme(highlighter.theme)) {
			// Single theme
			html = highlighter.codeToHtml(text, {
				lang: highlighter.lang,
				theme: highlighter.theme
			});
		} else {
			// Dual theme
			html = highlighter.codeToHtml(text, {
				lang: highlighter.lang,
				themes: highlighter.theme
			});
		}

		if (carta.sanitizer) {
			highlighted = carta.sanitizer(html);
		} else {
			highlighted = html;
		}

		requestAnimationFrame(resize);
	};

	const debouncedHighlight = debounce(highlight, 250);

	/**
	 * Highlight the nested languages in the markdown, loading the necessary
	 * languages if needed.
	 */
	const highlightNestedLanguages = debounce(async (text: string) => {
		const highlighter = await carta.highlighter();

		const hl = await import('../highlight');
		const { loadNestedLanguages } = hl;

		if (!highlighter) return;
		const { updated } = await loadNestedLanguages(highlighter, text);
		if (updated) debouncedHighlight(text);
	}, 300);

	const onValueChange = (newValue: string) => {
		if (highlightElem) {
			speculativeHighlightUpdate(highlightElem, prevValue, newValue);
			requestAnimationFrame(resize);
		}

		debouncedHighlight(newValue);
		highlightNestedLanguages(newValue);
		prevValue = newValue;
	};

	$effect(() => {
		if (BROWSER) onValueChange(value);
	});

	onMount(() => {
		mounted = true;
		const event = new CustomEvent('mount', {
			detail: {
				resize,
				elem
			}
		});
		dispatch('mount', event);
		requestAnimationFrame(resize);
	});
	onMount(() => {
		carta.$setInput(textarea, elem, () => {
			const newValue = textarea.value;
			if (newValue !== value) {
				value = newValue;
			}
		});
	});
</script>

<div
	role="tooltip"
	class="editor-unfocus-suggestion"
	id="editor-unfocus-suggestion-{simpleUUID}"
	style="display: {hidden ? 'none' : 'unset'};"
>
	Press ESC then TAB to move the focus off the field
</div>
<div
	role="textbox"
	tabindex="-1"
	class="carta-input"
	style="display: {hidden ? 'none' : 'unset'};"
	onclick={focus}
	onkeydown={focus}
	onscroll={() => {
		const event = new CustomEvent('scroll', {
			detail: { target: elem }
		});
		dispatch('scroll', event);
	}}
	bind:this={elem}
>
	<div class="carta-input-wrapper" bind:this={wrapperElem}>
		<div
			class="carta-highlight carta-font-code"
			tabindex="-1"
			aria-hidden="true"
			bind:this={highlightElem}
		>
			<!-- eslint-disable-line svelte/no-at-html-tags -->{@html highlighted}
		</div>

		<textarea
			class="carta-font-code"
			aria-multiline="true"
			aria-describedby="editor-unfocus-suggestion-{simpleUUID}"
			spellcheck={textareaProps.spellcheck === true}
			tabindex="0"
			{placeholder}
			{...textareaProps}
			bind:value
			bind:this={textarea}
			onscroll={() => (textarea.scrollTop = 0)}
		></textarea>
	</div>

	{#if mounted}
		{@render children?.()}
	{/if}
</div>

<style>
	.carta-input {
		position: relative;
	}

	.carta-input-wrapper {
		position: relative;
		font-family: monospace;
		min-height: 100%;
	}

	textarea {
		position: relative;
		width: 100%;
		max-width: 100%;

		overflow-y: hidden;
		resize: none;

		padding: 0;
		margin: 0;
		border: 0;

		color: transparent;
		background: transparent;

		outline: none;
		tab-size: 4;
	}

	.carta-highlight {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: 0;
		user-select: none;
		height: fit-content;

		padding: inherit;
		margin: inherit;

		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}

	:global(.carta-highlight .shiki) {
		margin: 0;
		tab-size: 4;
		background-color: transparent !important;
	}

	:global(.carta-highlight *) {
		font-family: inherit;
		font-size: inherit;

		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}

	.editor-unfocus-suggestion {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
</style>
