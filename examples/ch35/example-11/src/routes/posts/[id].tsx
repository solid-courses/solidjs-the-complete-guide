import { Title } from "@solidjs/meta";
import { createAsync, useParams } from "@solidjs/router";
import { Show } from "solid-js/web";
import { getServerSidePostById } from "~/database";

async function fetchPost(id: string) {
  "use server"
  return await getServerSidePostById(id);
}

export default function PostDetail() {
  const params = useParams();
  const post = createAsync(() => fetchPost(params.id))
  return (
    <main>
      <Show when={post()}>
        <Title>{post()!.title}</Title>
        <h1>{post()!.title}</h1>
        <div>{post()!.content}</div>
      </Show>
    </main>
  );
}
