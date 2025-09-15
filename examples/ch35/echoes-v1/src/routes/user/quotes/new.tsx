import { Title } from "@solidjs/meta";
import { createAsync, RouteSectionProps, useNavigate, useSubmission } from "@solidjs/router";
import { createMemo, For, onMount, Show } from "solid-js";
import { createQuoteAction } from "~/api/mutations";
import { queryAuthors, queryCurrentUserOrLogin } from "~/api/queries";

export const route = {
  preload: () => {
    queryCurrentUserOrLogin();
    queryAuthors();
  },
};

export default function NewQuote(props: RouteSectionProps) {
  const navigate = useNavigate();

  const user = createAsync(() => queryCurrentUserOrLogin());
  const authors = createAsync(() => queryAuthors());

  const addQuoteActionSubmission = useSubmission(createQuoteAction);
  const disabled = createMemo(() => addQuoteActionSubmission.pending);

  let quoteRef!: HTMLTextAreaElement;

  onMount(() => {
    quoteRef.focus();
  });

  return (
    <Show when={user()}>
      <main>
        <Title>Add Quote | Echoes</Title>

        <div class="user-header">
          <h1>Add Quote</h1>
          <button onClick={() => navigate('/user/quotes')}>Quotes</button>
        </div>

        <div class="user-body">
          <form action={createQuoteAction} method="post" class="content-entry">
            <Show when={addQuoteActionSubmission.error}>
              <div class="form-group error">
                {addQuoteActionSubmission.error.message}
              </div>
            </Show>

            <div class="form-group">
              <label>Author</label>
              <select name="author" id="author">
                <option value="select">Select Author</option>
                <For each={authors()}>
                  {item => <option value={item.id}>{item.name}</option>}
                </For>
              </select>
            </div>

            <div class="form-group">
              <label>Quote</label>
              <textarea
                rows={5}
                name="text"
                id="text"
                ref={quoteRef}
                autocomplete="off"
              />
            </div>

            <div class="form-group submit">
              <button type="submit" disabled={disabled()}>
                {disabled() ? 'Creating' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </Show>
  );
}