<script lang="ts">
	// Skeleton UI
	import { AppShell } from '@skeletonlabs/skeleton';
	// Disable server side rendering, not needed for a VST plugin
	export const prerender = true;
	export const ssr = false;
	// Stylesheets
	import '../app.postcss';
</script>

<svelte:document
	on:pointerlockchange={() => {
		console.log('pointer lock change received');
	}}
/>

<!-- prevent default mouse actions but allow key events through -->
<svelte:body
	on:mousedown|preventDefault={() => {
		window.focus();
	}}
	on:contextmenu|preventDefault={() => {
		window.focus();
	}}
/>
<!-- App Shell -->
<AppShell>
	<!-- Slot: Page Content -->
	<slot />
</AppShell>
