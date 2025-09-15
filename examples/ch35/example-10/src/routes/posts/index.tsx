import { Title } from "@solidjs/meta";
import { A, createAsync } from "@solidjs/router";
import { For } from "solid-js";
import { isServer } from "solid-js/web";
import { getServerSidePosts } from "~/database";

async function fetchPosts() {
  if (isServer) {
    return await getServerSidePosts();
  } else {
    const response = await fetch("/api/posts");
    return response.json();
  }
}

export default function Posts() {
  const posts = createAsync(() => fetchPosts());
  return (
    <main>
      <Title>Posts</Title>
      <h1>All Posts</h1>
      <ul>
        <For each={posts()}>{(post) => {
          return (
            <li>
              <A href={`/posts/${post.id}`}>{post.title}</A>
            </li>
          )
        }}</For>
      </ul>
    </main>
  );
}
