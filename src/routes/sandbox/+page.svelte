<script lang="ts">
	const svgBolt = `<svg class="fill-current w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224C.9 240.7-2.6 254.8 2 267.3S18.7 288 32 288H143.5L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H240.5L317.4 44.6z" /></svg>`;
</script>

<div class="page-container page-spacing neumorphism">
	<div class="display-screen text-black">Control Panel</div>
</div>

<style>
	/* Define the Neumorphism style */
	.neumorphism {
		background-color: #f0f0f0;
		border-radius: 20px;
		box-shadow:
			10px 10px 20px #c7c7c7,
			-10px -10px 20px #ffffff;
	}

	/* Define the rectangular display screen */
	.display-screen {
		width: 80%;
		height: 400px;
		margin: 0 auto;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f0f0f0;
		border-radius: 20px;
		box-shadow:
			10px 10px 20px #c7c7c7,
			-10px -10px 20px #ffffff;
	}

	/* Define the horizontal controls */
	.horizontal-controls {
		width: 80%;
		margin: 0 auto;
		margin-top: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	/* Define the responsive design */
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
	}
</style>
