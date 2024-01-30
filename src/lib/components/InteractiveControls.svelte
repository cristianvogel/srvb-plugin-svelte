<script>
	// @ts-nocheck
	import CablesDial from './Widgets/CablesDial.svelte';
	import { Manifest } from '$stores';
</script>

<div class="grid grid-cols-8 grid-rows-1 gap-0 mt-10">
	{#each [1, 2, 3, 4] as index}
		{@const { paramId, name, min, max, defaultValue } = $Manifest.parameters[index - 1]}
		<CablesDial paramId={'dial-' + paramId} {name} {min} {max} {defaultValue} />
	{/each}
</div>

<style>
</style>
