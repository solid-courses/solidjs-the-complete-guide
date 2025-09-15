import { Title } from "@solidjs/meta";
import { A, createAsync } from "@solidjs/router";
import { For, Show } from "solid-js";
import { queryPosts } from "~/database";

export default function Posts() {
  const posts = createAsync(() => queryPosts());
  return (
    <Show when={posts()} keyed>
      {posts => (
        <main>
          <Title>Posts</Title>
          <h1>All Posts</h1>
          <ul>
            <For each={posts}>{(post) => {
              return (
                <li>
                  <A href={`/posts/${post.id}`}>{post.title}</A> | <A href={`/posts/edit/${post.id}`}>Edit</A>
                </li>
              )
            }}</For>
          </ul>
        </main >
      )}
    </Show>
  );
}
