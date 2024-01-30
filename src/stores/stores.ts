import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import manifest from '$lib/data/manifest.json';

interface Parameter {
	paramId: string;
	name: string;
	min: number;
	max: number;
	defaultValue: number;
}

interface Window {
	width: number;
	height: number;
}

interface Manifest {
	window: Window;
	parameters: Parameter[];
}

//---- Cables related -------------------
export const CablesPatches: Writable<any> = writable([]);

export const Manifest: Writable<Manifest> = writable(manifest);
