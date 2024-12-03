<!--
  @component
  A basic component to render pre-rendered HTML content with a specific theme.
-->

<script>export let html;
export let theme = "default";
</script>

<div class="carta-viewer carta-theme__{theme} markdown-body">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html html}
</div>
