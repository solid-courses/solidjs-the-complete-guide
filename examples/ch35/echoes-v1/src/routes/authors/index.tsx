import { Title } from "@solidjs/meta";
import { A, createAsync } from "@solidjs/router";
import { For } from "solid-js";
import { queryAuthors } from "~/api/queries";

export const route = {
  preload: () => queryAuthors(),
};

export default function Quotes() {
  const authors = createAsync(() => queryAuthors());
  return (
    <main class="authors">
      <Title>All Authors</Title>
      <h1>All Authors!</h1>
      <ul class="authors">
        <For
          each={authors()}
          fallback={<div>No authors found.</div>}
        >{(item) => {
          return (
            <li>
              <A href={String(item.id)}>{item.name}</A>
            </li>
          )
        }}</For>
      </ul>
    </main>
  );
}