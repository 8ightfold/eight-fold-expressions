<script lang="ts">
  import type { BlogPost } from '$util/types';
  import { title, blogUrl, keywords } from '$lib/config'
  import dateformat from 'dateformat';
  import Jittery from '$components/basic/Jittery.svelte';

  export let post: BlogPost;
  export let hoverJitter: boolean = true;

  function formatDate(date: string) {
    return dateformat(date, "UTC:mmmm dd, yyyy");
  }

  function getKeywords(): string[] {
    let kw = keywords;
    if (post?.tags?.length) {
      kw = post.tags.concat(kw);
    }
    if (post?.keywords?.length) {
      kw = post.keywords.concat(kw);
    }
    return kw;
  }
</script>

<svelte:head>
  <meta name="keywords" content={getKeywords().join(', ')} />

  {#if post.excerpt}
    <meta name="description" content={post.excerpt} />
    <meta property="og:description" content={post.excerpt} />
    <meta name="twitter:description" content={post.excerpt} />
  {/if}

  <link rel="canonical" href="{blogUrl}/{post.slug}" />

  <title>{post.title} - {title}</title>
  <meta property="og:title"  content="{post.title} - {title}" />
	<meta name="twitter:title" content="{post.title} - {title}" />
</svelte:head>

<article>
  <h1><Jittery text="{post.title}" onhover={hoverJitter} /></h1>
  <p>Published on: {formatDate(post.date)}</p>
  {#if post.updated}
    <p>Updated on: {formatDate(post.updated)}</p>
  {/if}
  <p>Tags: {post.tags?.join(', ')}</p>
  <slot />
</article>
