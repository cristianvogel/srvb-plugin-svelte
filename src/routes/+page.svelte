<script>
	// This is the main page for the plugin
	// Here the main UI is defined, param changes are handled and the interop bindings get sent
	// to the bound native environment via  __postNativeMessage__ function
	// @ts-nocheck
	import InteractiveControls from '$lib/components/InteractiveControls.svelte';
	import { toFixed } from '$lib/precisUI/lib/Utils';
	import { ParameterManifest } from '$stores/generalStores';

	const manifest = $ParameterManifest;

	let readout = 0;
	let touchedID = 'dial.1';
	$: logger = `Parameter: ${getNameFromManifest(touchedID)} - ${readout}`;

	const parameters = manifest.parameters;

	function handleOutputValue(ev) {
		readout = Number(toFixed(ev.detail.value, 4));
		touchedID = ev.detail.id;
		const name = getNameFromManifest(touchedID);
		try {
			requestParamValueUpdate(name, readout);
		} catch (error) {
			console.error('Error updating parameter value', error);
		}
	}

	function getNameFromManifest(id) {
		const index = Number(id.split('.')[1]);
		const params = Object.values(parameters)[index - 1];
		return params.name;
	}

	// Elementary runtime
	// Interop bindings
	function requestParamValueUpdate(paramId, value) {
		if (typeof globalThis.__postNativeMessage__ === 'function') {
			globalThis.__postNativeMessage__('setParameterValue', {
				paramId,
				value
			});
		}
	}
</script>

<div class="page-container page-spacing neumorphism">
	<div class="display-screen">
		<div class="text-warning-400">
			<svg style="height: 1rem;">
				<text style="transform:translate(5%, 90%);font-size: xx-small" fill="grey">
					{logger}
				</text>
				<line x1="0.5rem" y1="7.5%" x2="225%" y2="7.5%" stroke="antiqueWhite" />
			</svg>
			<div class="absolute top-[80%] right-10 text-xs">
				𝌺 <a href="https://github.com/cristianvogel">@neverenginelabs</a>
			</div>
			<InteractiveControls on:output={handleOutputValue} />
		</div>
	</div>
</div>

<style>
	/* Define the Neumorphism style */
	.neumorphism {
		overflow: hidden;
		display: block;
		position: absolute;
		margin-left: 1px;
		padding-left: 10px;
		outline: 0;
		background-color: #868484;
		border-radius: 2px;
		box-shadow:
			10px 10px 20px #c7c7c7,
			-10px -10px 20px #ffffff;
	}

	/* Define the rectangular display screen */
	.display-screen {
		width: 700px;
		height: 360px;
		display: flex;
		padding: 1rem;
		background-color: #222222;
		border-radius: 20px;
		box-shadow:
			10px 10px 20px rgba(119, 147, 138, 0.302),
			-10px -10px 20px #403f3f;
	}

	/* Define the responsive design
	@media (min-width: 640px) {
		.display-screen {
			width: 60%;
		}
	}

	@media (min-width: 768px) {
		.display-screen {
			width: 50%;
		}
	}

	@media (min-width: 1024px) {
		.display-screen {
			width: 40%;
		}
	}

	@media (min-width: 1280px) {
		.display-screen {
			width: 30%;
		}
	}

	@media (min-width: 1536px) {
		.display-screen {
			width: 20%;
		}
	} */
</style>
