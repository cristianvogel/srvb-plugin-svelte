// General stores.

import type {
  ManifestData,
  ParameterDataUI,
  ParameterDataFromHost,
} from "$lib";
import { readable, writable } from "svelte/store";
import type { Readable, Writable } from "svelte/store";

// not sure how to import this dynamically at build time
// and its really only referenced here just be
// sure to make it reflect public/manifest.json if that
// gets updated
export const Manifest: ManifestData = {
  window: {
    width: 720,
    height: 444,
  },
  parameters: [
    { paramId: "size", name: "Size", min: 0.0, max: 1.0, defaultValue: 0.5 },
    { paramId: "decay", name: "Decay", min: 0.0, max: 1.0, defaultValue: 0.5 },
    { paramId: "mod", name: "Mod", min: 0.0, max: 1.0, defaultValue: 0.5 },
    { paramId: "mix", name: "Mix", min: 0.0, max: 1.0, defaultValue: 0.5 },
  ],
};

// custom store to hold incoming data from host
export const ParametersFromHost: Writable<ParameterDataFromHost | null> =
  writable();
export let IncomingValuesStore: ParameterDataFromHost;
ParametersFromHost.subscribe(($params) => {
  IncomingValuesStore = $params as ParameterDataFromHost;
});

// displaying
export const ParametersUI: Readable<ParameterDataUI[]> = readable(
  Manifest.parameters
);
export const DisplayNames: Writable<string[]> = writable(
  Manifest.parameters.map((p: any) => p.name)
);
export const PixelDensity: Writable<any> = writable(2);
