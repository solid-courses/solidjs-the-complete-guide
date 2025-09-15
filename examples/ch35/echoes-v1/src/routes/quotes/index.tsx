import { Title } from "@solidjs/meta";
import { A, createAsync } from "@solidjs/router";
import { For, Show } from "solid-js";
import { queryAuthor, queryQuotes } from '~/api/queries';

export const route = {
  preload: () => queryQuotes(),
};

export default function Quotes() {
  const quotes = createAsync(() => queryQuotes());

  return (
    <main>
      <Title>All Quotes</Title>
      <h1>All Quotes!</h1>
      <div class="quotes">
        <For
          each={quotes()}
          fallback={<div>No quotes available.</div>}
        >{(item) => {
          const author = createAsync(() => queryAuthor(item.author));
          return (
            <blockquote>
              <p class="text">{item.text}</p>
              <Show when={author()} keyed fallback={<p class="source">~Anonymous</p>}>
                {author => <p class="source">~<A href={`/authors/${author.id}`}>{author.name}</A></p>}
              </Show>
            </blockquote>
          )
        }}</For>
      </div>
    </main>
  );
}