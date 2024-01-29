// Project Data

import { getImageLink } from '$lib/data/images';

export interface Category {
	/** Provide a category title. */
	name: string;
	/** (optional) Provide a category description. */
	description?: string;
	/** Provide the desired routing path value, ex: `/[path]/[slug]` */
	path: string;
	/** Provide a list of projects. */
	projects: Project[];
}

export interface Project {
	/** Provide the project slug, for the route path. */
	slug: string;
	/** Provide the name of the project. */
	name: string;
	/** Provide a project description. Supports HTML. */
	description?: string;
	/** Provide the url of the project. */
	url: string;
	/** Provide the thumbnail image of the project. */
	thumbnail: string;
	/** Provide the banner image of the project. */
	banner: string;
	/** Provide background color classes. */
	background: string;
}

const placeholderHtml = `
<p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.</p>
`;

export let projectCategories: Category[] = [
	{
		path: 'development',
		name: 'Development',
		// description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		projects: [
			{
				slug: 'project-1',
				name: 'Project 1',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'zNRITe8NPqY', w: 400, h: 400 }),
				banner: getImageLink({ id: 'zNRITe8NPqY', w: 1920, h: 1080 }),
				background: 'variant-filled-primary'
			},
			{
				slug: 'project-2',
				name: 'Project 2',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'DtDlVpy-vvQ', w: 400, h: 400 }),
				banner: getImageLink({ id: 'DtDlVpy-vvQ', w: 1920, h: 1080 }),
				background: 'variant-filled-primary'
			},
			{
				slug: 'project-3',
				name: 'Project 3',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'KiEiI2b9GkU', w: 400, h: 400 }),
				banner: getImageLink({ id: 'KiEiI2b9GkU', w: 1920, h: 1080 }),
				background: 'variant-filled-primary'
			}
		]
	},
	{
		path: 'design',
		name: 'Design',
		// description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		projects: [
			{
				slug: 'project-4',
				name: 'Project 4',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'ubIWo074QlU', w: 400, h: 400 }),
				banner: getImageLink({ id: 'ubIWo074QlU', w: 1920, h: 1080 }),
				background: 'variant-filled-secondary'
			},
			{
				slug: 'project-5',
				name: 'Project 5',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'IyaNci0CyRk', w: 400, h: 400 }),
				banner: getImageLink({ id: 'IyaNci0CyRk', w: 1920, h: 1080 }),
				background: 'variant-filled-secondary'
			},
			{
				slug: 'project-6',
				name: 'Project 6',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'LPWl2pEVGKc', w: 400, h: 400 }),
				banner: getImageLink({ id: 'LPWl2pEVGKc', w: 1920, h: 1080 }),
				background: 'variant-filled-secondary'
			}
		]
	},
	{
		path: 'ux',
		name: 'User Experience',
		// description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		projects: [
			{
				slug: 'project-7',
				name: 'Project 7',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'ZSPBhokqDMc', w: 400, h: 400 }),
				banner: getImageLink({ id: 'ZSPBhokqDMc', w: 1920, h: 1080 }),
				background: 'variant-filled-tertiary'
			},
			{
				slug: 'project-8',
				name: 'Project 8',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'tZc3vjPCk-Q', w: 400, h: 400 }),
				banner: getImageLink({ id: 'tZc3vjPCk-Q', w: 1920, h: 1080 }),
				background: 'variant-filled-tertiary'
			},
			{
				slug: 'project-9',
				name: 'Project 9',
				description: placeholderHtml,
				url: 'https://example.com/',
				thumbnail: getImageLink({ id: 'hLit2zL-Dhk', w: 400, h: 400 }),
				banner: getImageLink({ id: 'hLit2zL-Dhk', w: 1920, h: 1080 }),
				background: 'variant-filled-tertiary'
			}
		]
	}
];
