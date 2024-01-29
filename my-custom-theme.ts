import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #2e919c
		'--color-primary-50': '224 239 240', // #e0eff0
		'--color-primary-100': '213 233 235', // #d5e9eb
		'--color-primary-200': '203 228 230', // #cbe4e6
		'--color-primary-300': '171 211 215', // #abd3d7
		'--color-primary-400': '109 178 186', // #6db2ba
		'--color-primary-500': '46 145 156', // #2e919c
		'--color-primary-600': '41 131 140', // #29838c
		'--color-primary-700': '35 109 117', // #236d75
		'--color-primary-800': '28 87 94', // #1c575e
		'--color-primary-900': '23 71 76', // #17474c
		// secondary | #fac1e4
		'--color-secondary-50': '254 246 251', // #fef6fb
		'--color-secondary-100': '254 243 250', // #fef3fa
		'--color-secondary-200': '254 240 248', // #fef0f8
		'--color-secondary-300': '253 230 244', // #fde6f4
		'--color-secondary-400': '252 212 236', // #fcd4ec
		'--color-secondary-500': '250 193 228', // #fac1e4
		'--color-secondary-600': '225 174 205', // #e1aecd
		'--color-secondary-700': '188 145 171', // #bc91ab
		'--color-secondary-800': '150 116 137', // #967489
		'--color-secondary-900': '123 95 112', // #7b5f70
		// tertiary | #2ab7ff
		'--color-tertiary-50': '223 244 255', // #dff4ff
		'--color-tertiary-100': '212 241 255', // #d4f1ff
		'--color-tertiary-200': '202 237 255', // #caedff
		'--color-tertiary-300': '170 226 255', // #aae2ff
		'--color-tertiary-400': '106 205 255', // #6acdff
		'--color-tertiary-500': '42 183 255', // #2ab7ff
		'--color-tertiary-600': '38 165 230', // #26a5e6
		'--color-tertiary-700': '32 137 191', // #2089bf
		'--color-tertiary-800': '25 110 153', // #196e99
		'--color-tertiary-900': '21 90 125', // #155a7d
		// success | #8cde9a
		'--color-success-50': '238 250 240', // #eefaf0
		'--color-success-100': '232 248 235', // #e8f8eb
		'--color-success-200': '226 247 230', // #e2f7e6
		'--color-success-300': '209 242 215', // #d1f2d7
		'--color-success-400': '175 232 184', // #afe8b8
		'--color-success-500': '140 222 154', // #8cde9a
		'--color-success-600': '126 200 139', // #7ec88b
		'--color-success-700': '105 167 116', // #69a774
		'--color-success-800': '84 133 92', // #54855c
		'--color-success-900': '69 109 75', // #456d4b
		// warning | #8a5333
		'--color-warning-50': '237 229 224', // #ede5e0
		'--color-warning-100': '232 221 214', // #e8ddd6
		'--color-warning-200': '226 212 204', // #e2d4cc
		'--color-warning-300': '208 186 173', // #d0baad
		'--color-warning-400': '173 135 112', // #ad8770
		'--color-warning-500': '138 83 51', // #8a5333
		'--color-warning-600': '124 75 46', // #7c4b2e
		'--color-warning-700': '104 62 38', // #683e26
		'--color-warning-800': '83 50 31', // #53321f
		'--color-warning-900': '68 41 25', // #442919
		// error | #55edc0
		'--color-error-50': '230 252 246', // #e6fcf6
		'--color-error-100': '221 251 242', // #ddfbf2
		'--color-error-200': '213 251 239', // #d5fbef
		'--color-error-300': '187 248 230', // #bbf8e6
		'--color-error-400': '136 242 211', // #88f2d3
		'--color-error-500': '85 237 192', // #55edc0
		'--color-error-600': '77 213 173', // #4dd5ad
		'--color-error-700': '64 178 144', // #40b290
		'--color-error-800': '51 142 115', // #338e73
		'--color-error-900': '42 116 94', // #2a745e
		// surface | #4ba5c0
		'--color-surface-50': '228 242 246', // #e4f2f6
		'--color-surface-100': '219 237 242', // #dbedf2
		'--color-surface-200': '210 233 239', // #d2e9ef
		'--color-surface-300': '183 219 230', // #b7dbe6
		'--color-surface-400': '129 192 211', // #81c0d3
		'--color-surface-500': '75 165 192', // #4ba5c0
		'--color-surface-600': '68 149 173', // #4495ad
		'--color-surface-700': '56 124 144', // #387c90
		'--color-surface-800': '45 99 115', // #2d6373
		'--color-surface-900': '37 81 94' // #25515e
	}
};
