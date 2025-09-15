import { Title } from "@solidjs/meta";
import { createAsync, RouteSectionProps, useParams } from "@solidjs/router";
import { isServer, Show } from "solid-js/web";
import { getServerSidePostById } from "~/database";

async function fetchPost(id: string) {
  if (isServer) {
    return await getServerSidePostById(id);
  } else {
    const response = await fetch(`/api/post/${id}`);
    return response.json();
  }
}

export default function PostDetail(props: RouteSectionProps) {
  const post = createAsync(() => fetchPost(props.params.id));
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
