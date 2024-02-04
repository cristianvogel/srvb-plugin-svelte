
import adapter from '@sveltejs/adapter-static' //should be adapter-static? ( like Tauri..? )
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: false,
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			// NEL ⤵︎
			'$precisUI' : 'src/lib/precisUI',
			'$stores' : 'src/stores/',
		},
	},
	// options tuned for audio plug-in dev 
	// "dom", Svelte emits a JavaScript class for mounting to the DOM.
	compilerOptions: { 
		generate: 'dom',
		errorMode: 'throw',
	}
};

export default config;
