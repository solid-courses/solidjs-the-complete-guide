import { Title } from "@solidjs/meta";
import { createAsync, RouteDefinition, RouteSectionProps, useNavigate, useSubmission } from "@solidjs/router";
import { createMemo, For, onMount, Show } from "solid-js";
import { updateQuoteAction } from "~/api/mutations";
import { queryAuthors, queryCurrentUserOrLogin, queryQuote } from "~/api/queries";

export const route = {
  preload: ({ params }) => {
    queryCurrentUserOrLogin();
    queryAuthors();
    queryQuote(params.id);
  },
} satisfies RouteDefinition;

export default function EditQuote(props: RouteSectionProps) {
  const navigate = useNavigate();

  const user = createAsync(() => queryCurrentUserOrLogin());
  const authors = createAsync(() => queryAuthors());
  const quote = createAsync(() => queryQuote(props.params.id));

  const addQuoteActionSubmission = useSubmission(updateQuoteAction);
  const disabled = createMemo(() => addQuoteActionSubmission.pending);

  let quoteRef!: HTMLTextAreaElement;

  onMount(() => {
    quoteRef.focus();
    const { value: { length } } = quoteRef;
    quoteRef.setSelectionRange(length, length);
  });

  return (
    <Show when={user() && quote()}>
      <main>
        <Title>Edit Quote | Echoes</Title>

        <div class="user-header">
          <h1>Edit Quote</h1>
          <button onClick={() => navigate('/user/quotes/new')}>Add New Quote</button>
        </div>

        <div class="user-body">
          <form action={updateQuoteAction} method="post" class="content-entry">
            <Show when={addQuoteActionSubmission.error}>
              <div class="form-group error">
                {addQuoteActionSubmission.error.message}
              </div>
            </Show>

            <input name="id" type="hidden" value={quote()!.id} />

            <div class="form-group">
              <label for="author">Author</label>
              <select name="author" id="author">
                <For each={authors()}>
                  {item => <option
                    value={item.id}
                    selected={item.id === quote()!.author}
                  >{item.name}</option>}
                </For>
              </select>
            </div>

            <div class="form-group">
              <label for="text">Quote</label>
              <textarea
                rows={5}
                name="text"
                id="text"
                ref={quoteRef}
                autocomplete="off"
              >{quote()!.text}</textarea>
            </div>

            <div class="form-group submit">
              <button type="submit" disabled={disabled()}>
                {disabled() ? 'Saving' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </Show>
  );
}