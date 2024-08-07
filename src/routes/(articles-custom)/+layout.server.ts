import { filteredPostTable } from '$util';

export async function load({ url }: { url: { pathname: string } }) {
  const { pathname } = url;
  const slug = pathname.replace(/[\w-]*\//g, '');
	let post = filteredPostTable
    .find((post) => (slug === post.slug));
	return { post: post };
}
