<!--
	@component
	A wrapped textarea component integrated with Carta. It handles the highlighting
	and propagates events to the Carta instance.	
-->

<script>import { onMount } from "svelte";
import { debounce } from "../utils";
import { BROWSER } from "esm-env";
import { speculativeHighlightUpdate } from "../speculative";
export let carta;
export let value = "";
export let placeholder = "";
export let elem;
export let props = {};
export let hidden = false;
let textarea;
let highlightElem;
let wrapperElem;
let highlighted = value;
let mounted = false;
let prevValue = value;
const simpleUUID = Math.random().toString(36).substring(2);
export const resize = () => {
  if (!mounted || !textarea) return;
  textarea.style.height = "0";
  textarea.style.minHeight = "0";
  textarea.style.height = textarea.scrollHeight + "px";
  textarea.style.minHeight = wrapperElem.clientHeight + "px";
  textarea.scrollTop = 0;
  const isFocused = document.activeElement === textarea;
  if (!isFocused) return;
  if (!carta.input) return;
  const coords = carta.input.getCursorXY();
  if (!coords) return;
  if (coords.top < 0 || coords.top + carta.input.getRowHeight() >= elem.scrollTop + elem.clientHeight)
    elem.scrollTo({ top: coords?.top, behavior: "instant" });
};
const focus = () => {
  const selectedText = window.getSelection()?.toString();
  if (selectedText) return;
  textarea?.focus();
};
const highlight = async (text) => {
  const highlighter = await carta.highlighter();
  if (!highlighter) return;
  let html;
  const hl = await import("../highlight");
  const { isSingleTheme } = hl;
  if (isSingleTheme(highlighter.theme)) {
    html = highlighter.codeToHtml(text, {
      lang: highlighter.lang,
      theme: highlighter.theme
    });
  } else {
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
const highlightNestedLanguages = debounce(async (text) => {
  const highlighter = await carta.highlighter();
  const hl = await import("../highlight");
  const { loadNestedLanguages } = hl;
  if (!highlighter) return;
  const { updated } = await loadNestedLanguages(highlighter, text);
  if (updated) debouncedHighlight(text);
}, 300);
const onValueChange = (value2) => {
  if (highlightElem) {
    speculativeHighlightUpdate(highlightElem, prevValue, value2);
    requestAnimationFrame(resize);
  }
  debouncedHighlight(value2);
  highlightNestedLanguages(value2);
  prevValue = value2;
};
$: if (BROWSER) onValueChange(value);
onMount(() => {
  mounted = true;
  requestAnimationFrame(resize);
});
onMount(() => {
  carta.$setInput(textarea, elem, () => {
    value = textarea.value;
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
	on:click={focus}
	on:keydown={focus}
	on:scroll
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
			spellcheck={props.spellcheck === true}
			tabindex="0"
			{placeholder}
			{...props}
			bind:value
			bind:this={textarea}
			on:scroll={() => (textarea.scrollTop = 0)}
		></textarea>
	</div>

	{#if mounted}
		<slot />
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
