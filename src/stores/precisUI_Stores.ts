import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { BasicController } from '$lib/precisUI/lib/PrecisControllers';
import type { DialTag, PointsArray } from '$lib/precisUI/Precis-UI-TypeDeclarations';

export type WidgetRegister = Map<string, BasicController>; // widget.id , instance
export const WidgetStore: Writable<WidgetRegister> = writable(new Map());

type PointerPlot = Map<string, PointsArray>; // widget.id , array of points
export const PointerPlotStore: Writable<PointerPlot> = writable(new Map());
export const ListeningWidget: Writable<BasicController> = writable();
export const ListeningElement: Writable<HTMLElement> = writable();

// added for this project
export const TouchedID: Writable<DialTag> = writable('');

/**
 * this is an experimental implementation
 * of a Dirty flag in a store. When it is triggered, its value increments
 * by 1 and can then be used to trigger use() actions
 */
function createDirty() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		resetTo: (v) => {
			set(v);
		},
		trigger: () => update((n) => n + 1)
	};
}

export const Dirty = createDirty();
