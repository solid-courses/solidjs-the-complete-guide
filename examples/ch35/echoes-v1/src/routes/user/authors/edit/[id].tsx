import { Title } from "@solidjs/meta";
import { createAsync, RouteDefinition, RouteSectionProps, useNavigate, useSubmission } from "@solidjs/router";
import { createMemo, onMount, Show } from "solid-js";
import { updateAuthorAction } from "~/api/mutations";
import { queryAuthor, queryCurrentUserOrLogin } from "~/api/queries";

export const route = {
  preload: ({ params }) => {
    queryCurrentUserOrLogin();
    queryAuthor(params.id);
  },
} satisfies RouteDefinition;

export default function EditAuthor(props: RouteSectionProps) {
  const navigate = useNavigate();

  const user = createAsync(() => queryCurrentUserOrLogin());
  const author = createAsync(() => queryAuthor(props.params.id));

  const addAuthorActionSubmission = useSubmission(updateAuthorAction);
  const disabled = createMemo(() => addAuthorActionSubmission.pending);

  let nameRef!: HTMLInputElement;

  onMount(() => {
    nameRef.focus();
  });

  return (
    <Show when={user() && author()}>
      <main>
        <Title>Edit Author | Echoes</Title>

        <div class="user-header">
          <h1>Edit Author</h1>
          <button onClick={() => navigate('/user/authors/new')}>Add New Author</button>
        </div>

        <div class="user-body">
          <Show when={author()}>

            <form action={updateAuthorAction} method="post" class="content-entry">
              <Show when={addAuthorActionSubmission.error}>
                <div class="form-group error">
                  {addAuthorActionSubmission.error.message}
                </div>
              </Show>

              <input name="id" type="hidden" value={author()!.id} />

              <div class="form-group">
                <label for="name">Name</label>
                <input
                  name="name"
                  id="name"
                  autocomplete="off"
                  ref={nameRef}
                  value={author()?.name} placeholder="Name"
                />
              </div>

              <div class="form-group">
                <label for="bio">Biography</label>
                <textarea
                  rows={5}
                  name="bio"
                  id="bio"
                  autocomplete="off"
                >{author()!.bio}</textarea>
              </div>

              <div class="form-group submit">
                <button type="submit" disabled={disabled()}>
                  {disabled() ? 'Saving' : 'Save'}
                </button>
              </div>
            </form>
          </Show>
        </div>
      </main>
    </Show>
  );
}