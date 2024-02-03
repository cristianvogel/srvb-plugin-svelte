// General stores.

import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const PixelDensity: Writable<any> = writable(2);
export const ParameterManifest: Writable<any> = writable({
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
});
