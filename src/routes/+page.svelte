<script lang="ts">
	import InteractiveControls from '$lib/components/InteractiveControls.svelte';

	let readout = 0;
	let touchedID = 'unknown';
	$: logger = `Output from: ${touchedID} - ${readout}`;
</script>

<div class="page-container page-spacing neumorphism">
	<div class="display-screen">
		<div class="text-warning-400">
			<svg style="height: 1rem;">
				<text style="transform:translate(5%, 100%);font-size: xx-small" fill="cyan">
					{logger}
				</text>
				<line x1="0.5rem" y1="7.5%" x2="225%" y2="7.5%" stroke="antiqueWhite" />
			</svg>
			<div class="absolute top-50 left-10">
				𝌺 <a href="https://twitter.com/neverenginelabs">@neverenginelabs</a>
			</div>
			<InteractiveControls />
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
		background-color: #f0f0f0;
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
			10px 10px 20px rgba(20, 255, 181, 0.302),
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
