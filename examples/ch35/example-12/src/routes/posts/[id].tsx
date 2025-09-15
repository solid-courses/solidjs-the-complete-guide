import { Title } from "@solidjs/meta";
import { createAsync, RouteSectionProps, useParams } from "@solidjs/router";
import { Show } from "solid-js/web";
import { queryPost } from "~/database";

export default function PostDetail({ params }: RouteSectionProps) {
  const post = createAsync(() => queryPost(params.id));
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
