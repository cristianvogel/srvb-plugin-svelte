<script lang="ts">
  // This is the main page for the plugin
  // Here the main UI is defined, param changes are handled and the interop bindings get sent
  // to the bound native environment via  __postNativeMessage__ function
  // @ts-nocheck
  import InteractiveControls from "$lib/components/InteractiveControls.svelte";
  import { toFixed } from "$lib/precisUI/lib/Utils";
  import { Parameters } from "$stores/generalStores";
  import type { DialTag } from "$precisUI/Precis-UI-TypeDeclarations";
  import { TouchedID } from "$stores/precisUI_Stores";

  let logger = "▷ ";
  $: readout = 0;
  $: logger = `${$TouchedID} ▷ ${getParamId($TouchedID)} : ${readout}`;

  function handleOutputValue(ev) {
    $TouchedID = ev.detail.id;
    readout = displayValue(ev.detail.value);
    const paramID: string = getParamId(ev.detail.id);
    requestParamValueUpdate(paramID, ev.detail.value);
  }

  function getParamId(dialTag: DialTag) {
    const index = getIndexFromDialTag(dialTag);
    const paramId = $Parameters.map((p) => p.paramId)[index - 1];
    return paramId;
  }

  function getIndexFromDialTag(dialTag: DialTag) {
    return Number(dialTag.split(".")[1]);
  }

  function displayValue(value) {
    return Number(toFixed(value, 4));
  }

  // Elementary runtime
  // Interop bindings
  function requestParamValueUpdate(paramId, value) {
    if (typeof globalThis.__postNativeMessage__ === "function") {
      globalThis.__postNativeMessage__("setParameterValue", {
        paramId,
        value,
      });
      logger = " setParameterValue " + paramId + " , " + value;
    }
  }
</script>

<div class="page-container page-spacing neumorphism">
  <div class="display-screen">
    <div class="text-warning-400">
      <svg style="height: 3rem; width: 40rem">
        <text
          style="transform:translate(0.5rem, 1.8rem);font-size: xx-small"
          fill="darkcyan"
        >
          {logger}
        </text>
        <text
          style="transform:translate(0.5rem, 1rem);font-size: xx-small"
          fill="slategrey"
        >
          Right mouse or control and drag for Precision mode.
        </text>
        <line x1="1%" y1="0.16px" x2="33%" y2="0.16px" stroke="antiqueWhite" />
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
