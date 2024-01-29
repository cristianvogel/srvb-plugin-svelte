// Consumed by the `/lib/Social/Social.svelte component
// Font Awesome Icons via https://fontawesome.com/

interface SocialLink {
	/** Provide the title. */
	title: string;
	/** Provide the url. */
	url: string;
	/** Provide the Font Awesome icon information. */
	icon: string;
	/** Provide the anchor target attribute. */
	target: string;
}

export const socialLinks: SocialLink[] = [
	{
		title: 'Twitter',
		url: 'https://www.twitter.com',
		icon: 'fa-brands fa-twitter',
		target: '_blank'
	},
	{
		title: 'Github',
		url: 'https://www.github.com',
		icon: 'fa-brands fa-github',
		target: '_blank'
	},
	{
		title: 'Instagram',
		url: 'https://www.instagram.com',
		icon: 'fa-brands fa-instagram',
		target: '_blank'
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com',
		icon: 'fa-brands fa-linkedin',
		target: '_blank'
	},
	{
		title: 'Email',
		url: 'mailto:contact@email.com',
		icon: 'fa-solid fa-envelope',
		target: ''
	}
];
