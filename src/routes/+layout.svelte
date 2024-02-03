<script>
	import { onMount } from 'svelte';

	// Skeleton UI
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { PixelDensity } from '$stores/generalStores';
	// SvelteKit: Disable server side rendering, not needed for a VST plugin
	export const prerender = true;
	export const ssr = false;

	onMount(() => {
		// put the device pixel density into a store
		// this is used to scale mouse movement for (non) high DPI displays
		$PixelDensity = window.devicePixelRatio || 1;
		console.log('Using PixelDensity: ', $PixelDensity);
	});
</script>

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
