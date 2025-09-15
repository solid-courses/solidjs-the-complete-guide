import { Title } from "@solidjs/meta";
import { RouteDefinition, RouteSectionProps, createAsync } from "@solidjs/router";
import { For, Show } from "solid-js";
import { queryAuthorWithQuotes } from "~/api/queries";

export const route = {
  preload: ({ params }) => {
    queryAuthorWithQuotes(params.id);
  },
} satisfies RouteDefinition;

export default function Author(props: RouteSectionProps) {
  const author = createAsync(() => queryAuthorWithQuotes(props.params.id));

  return (
    <Show
      when={author()}
      fallback={<main class="not-found">Author not found.</main>}
    >
      <Title>{author()?.name}</Title>
      <main class="author">
        <h1>{author()?.name}</h1>
        <h2>Quotes</h2>
        <div class="quotes">
          <For
            each={author()!.quotes}
            fallback={<div>Author does not have any quotes.</div>}
          >{(item) => {
            return (
              <blockquote>
                <p class="text">{item.text}</p>
              </blockquote>
            )
          }}</For>
        </div>
        <Show when={author()?.bio}>
          <h2>Short Biography</h2>
          <div class="bio">{author()?.bio}</div>
        </Show>
      </main>
    </Show>
  );
}