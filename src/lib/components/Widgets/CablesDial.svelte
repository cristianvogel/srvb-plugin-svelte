<script lang="ts">
	import { CablesPatches } from '$stores';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { expoInOut } from 'svelte/easing';

	export let paramId: string;
	export let name: string = 'Dial';
	export let min: number = 0;
	export let max: number = 1;
	export let defaultValue: number = 0.5;

	let pathPatch: string = `/cables-dial/js/patch.js`;
	let canvasId: string = `${paramId}`;

	const fadeUp = tweened(0, {
		duration: 1000,
		easing: expoInOut
	});

	const initializeCables = () => {
		$CablesPatches.push(
			new CABLES.Patch({
				patch: CABLES.exportedPatch,
				prefixAssetPath: '/cables-dial/',
				assetPath: '',
				jsPath: '',
				glCanvasId: canvasId,
				glCanvasResizeToWindow: false,
				onError: showError,
				onPatchLoaded: patchInitialized,
				onFinishedLoading: patchFinishedLoading,
				canvas: { alpha: true, premultipliedAlpha: true },
				variables: {}
			})
		);
	};

	function showError(errId: number, errMsg: string) {
		alert('Cables error occured: ' + errId + ', ' + errMsg);
	}

	function patchInitialized() {
		console.log('patchInitialized');
	}

	async function patchFinishedLoading() {
		console.log(`${paramId} finished loading`);
	}

	onMount(() => {
		initializeCables();
	});
</script>

<svelte:head>
	<script src={pathPatch}></script>
</svelte:head>

<div class="cables-dial-container">
	<canvas id={canvasId} width="100%" height="100%" />
</div>
<span class="font-mono text-xs">{name}</span>

<style>
	.cables-dial-container {
		z-index: 10;
	}
	.cables-dial {
		/* disable on touch highlights of html elements, especially on mobile! */
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	canvas {
		background-color: transparent;
	}
</style>
