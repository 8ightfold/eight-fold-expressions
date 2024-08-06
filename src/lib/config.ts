import { dev } from '$app/environment';
export { blogUrl } from '$util';
export { base } from '$app/paths';

export const title = '(eight && ...)';
export const description = 'Eightfold\'s blog';
export const url = dev ? 'http://localhost:5173' : 'https://8ightfold.github.io/eight-fold-expressions'
export const homepage = `${url}/main`;

// So I don't accidentally leave this on in release.
const debugInternal = true;
export const debug = dev && debugInternal;

export const keywords = [
	'Eightfold',
	'Svelte',
	'SvelteKit',
	'Blog',
	'Static Site',
	'Web Development',
	'Low Level Programming',
	'C++', 'CPP', 'Assembly',
];
