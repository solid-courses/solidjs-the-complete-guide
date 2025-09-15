import { Title } from "@solidjs/meta";
import { action, createAsync, useParams, useSubmission } from "@solidjs/router";
import { createMemo, onMount, Show } from "solid-js";
import { queryPost, replacePost } from "~/database";

const updatePost = action(async (formData: FormData) => {
  "use server"

  const id = formData.get('id') as string | null;
  if (!id) throw new Error('Id is required');

  const title = formData.get('title') as string | null;
  if (!title) throw new Error('Title is required');

  const content = formData.get('content') as string | null;
  if (!content) throw new Error('Content is required');

  await replacePost({
    id,
    title,
    content,
  });
}, 'update-post');

export default function EditPost() {
  const params = useParams();
  const post = createAsync(() => queryPost(params.id));

  const submission = useSubmission(updatePost);
  const disabled = createMemo(() => submission.pending);

  let titleRef!: HTMLInputElement;

  onMount(() => titleRef.focus());

  return (
    <main>
      <Title>Edit Post</Title>
      <section class="edit">
        <Show when={post()}>
          <form action={updatePost} method="post" class="content-entry">
            <Show when={submission.error}>
              <div class="form-group error">
                {submission.error.message}
              </div>
            </Show>

            <input name="id" type="hidden" value={post()!.id} />

            <div class="form-group">
              The update goes through but SolidStart shows stale data because it spins multiple
              instances and we updated in-memory data.
            </div>

            <div class="form-group">
              <label for="name">Title:</label>
              <input
                name="title"
                id="title"
                autocomplete="off"
                ref={titleRef}
                value={post()?.title} placeholder="Name"
              />
            </div>

            <div class="form-group">
              <label for="content">Content:</label>
              <textarea
                rows={5}
                name="content"
                id="content"
                autocomplete="off"
              >{post()!.content}</textarea>
            </div>

            <div class="form-group submit">
              <button type="submit" disabled={disabled()}>
                {disabled() ? 'Updating' : 'Update'}
              </button>
            </div>
          </form>
        </Show>
      </section>
    </main>
  );
}