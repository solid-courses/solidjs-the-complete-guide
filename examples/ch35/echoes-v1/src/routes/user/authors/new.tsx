import { Title } from "@solidjs/meta";
import { createAsync, RouteSectionProps, useNavigate, useSubmission } from "@solidjs/router";
import { createMemo, onMount, Show } from "solid-js";
import { createAuthorAction } from "~/api/mutations";
import { queryCurrentUserOrLogin } from "~/api/queries";

export const route = {
  preload: () => {
    queryCurrentUserOrLogin();
  },
};

export default function NewAuthor(props: RouteSectionProps) {
  const navigate = useNavigate();

  const user = createAsync(() => queryCurrentUserOrLogin());

  const addAuthorActionSubmission = useSubmission(createAuthorAction);
  const disabled = createMemo(() => addAuthorActionSubmission.pending);

  let nameRef!: HTMLInputElement;

  onMount(() => {
    nameRef.focus();
  });

  return (
    <Show when={user()}>
      <main>
        <Title>Add Author | Echoes</Title>

        <div class="user-header">
          <h1>Add Author</h1>
          <button onClick={() => navigate('/user/authors')}>Authors</button>
        </div>

        <div class="user-body">
          <form action={createAuthorAction} method="post" class="content-entry">
            <Show when={addAuthorActionSubmission.error}>
              <div class="form-group error">
                {addAuthorActionSubmission.error.message}
              </div>
            </Show>

            <div class="form-group">
              <label for="name">Name</label>
              <input
                name="name"
                id="name"
                placeholder="Name"
                autocomplete="off"
                ref={nameRef}
              />
            </div>

            <div class="form-group">
              <label for="bio">Biography</label>
              <textarea
                rows={5}
                name="bio"
                id="bio"
                autocomplete="off"
                placeholder="Biography"
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