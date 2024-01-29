// Navigation Links
// NOTE: for best results, limit this to 3-5 options

interface Navigation {
	/** Provide a local route path. */
	path: string;
	/** Provide the visible label text. */
	label: string;
}

export const navigation: Navigation[] = [
	{ path: '/', label: 'Home' },
	// { path: '/about', label: 'About' },
	// { path: '/projects', label: 'Projects' }
	// Enable the following for a test sandbox route.
	{ path: '/sandbox', label: 'Sandbox' }
];
