// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { getCollection } from 'astro:content';

export const SITE_TITLE = "Jacob's Blog";
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const POST_LIST = (await getCollection('blog')).filter((post) => post.data.category === 'Computing').sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),);
