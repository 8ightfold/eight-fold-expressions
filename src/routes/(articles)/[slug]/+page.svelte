<script lang="ts">
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  import type { BlogPost } from '$util/types';
  import dateformat from 'dateformat';
  import Jittery from '$components/basic/Jittery.svelte';
  import Post from '$components/Post.svelte'
  import '$styles/style.scss'

  export let data: { post: BlogPost };
	$: ({ post } = data);

  const formatDate = (date: string) => {
    return dateformat(date, "UTC:mmmm dd, yyyy");
  };
</script>

<Header />

{#if post}
<Post post={post}>
  {@html post.html}
</Post>
{:else}
<h1>Fatal error.</h1>
{/if}

<Footer />
