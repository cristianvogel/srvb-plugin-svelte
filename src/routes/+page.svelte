<script>
	// @ts-nocheck
	import InteractiveControls from '$lib/components/InteractiveControls.svelte';

	// todo: try to get this from the public/manifest.json file
	const manifest = {
		window: {
			width: 720,
			height: 444
		},
		parameters: [
			{ paramId: 'size', name: 'Size', min: 0.0, max: 1.0, defaultValue: 0.5 },
			{ paramId: 'decay', name: 'Decay', min: 0.0, max: 1.0, defaultValue: 0.5 },
			{ paramId: 'mod', name: 'Mod', min: 0.0, max: 1.0, defaultValue: 0.5 },
			{ paramId: 'mix', name: 'Mix', min: 0.0, max: 1.0, defaultValue: 0.5 }
		]
	};

	let readout = 0;
	let touchedID = 'dial.1';
	$: logger = `Output from: ${getNameFromManifest(touchedID)} - ${readout}`;

	const parameters = manifest.parameters;

	function handleOutputValue(ev) {
		readout = ev.detail.value;
		touchedID = ev.detail.id;
		const name = getNameFromManifest(touchedID);
		try {
			requestParamValueUpdate(name, readout);
		} catch (error) {}
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
				<text style="transform:translate(5%, 100%);font-size: xx-small" fill="grey">
					{logger}
				</text>
				<line x1="0.5rem" y1="7.5%" x2="225%" y2="7.5%" stroke="antiqueWhite" />
			</svg>
			<div class="absolute top-50 left-10">
				𝌺 <a href="https://twitter.com/neverenginelabs">@neverenginelabs</a>
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
		background-color: #5e6d99;
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
		background-color: #313131;
		border-radius: 20px;
		box-shadow:
			10px 10px 20px rgba(119, 147, 138, 0.302),
			-10px -10px 20px #403f3f;
	}
</style>
