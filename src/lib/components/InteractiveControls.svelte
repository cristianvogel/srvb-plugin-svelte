<script>
	// @ts-nocheck
	import Radial from '$lib/components/PrecisUI/Radial.svelte';
	import { DisplayNames } from '$stores/generalStores';
</script>

<div class="grid grid-cols-4 gap-4">
	{#each [1, 2, 3, 4] as index}
		<!-- 	
		this is all SVG, so styling can be applied to a limited extent 
		see app.postcss for additional styling example
	-->
		<Radial
			x={120 * index}
			id={`dial.${index}`}
			label={$DisplayNames[index - 1]}
			scale="0.8"
			on:output
		/>
	{/each}
</div>
