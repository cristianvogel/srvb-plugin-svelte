<script>
	// Skeleton UI
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	// SvelteKit: Disable server side rendering, not needed for a VST plugin
	export const prerender = true;
	export const ssr = false;
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
