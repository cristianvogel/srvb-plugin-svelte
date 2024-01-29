import { join } from 'path';
import type { Config } from 'tailwindcss';
import { myCustomTheme } from './my-custom-theme';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		})
	]
} satisfies Config;

export default config;
