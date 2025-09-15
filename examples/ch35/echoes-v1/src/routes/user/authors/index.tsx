import { Title } from "@solidjs/meta";
import { createAsync, useAction, useNavigate } from "@solidjs/router";
import { createSignal, For, Show } from "solid-js";
import { deleteAuthorAction, deleteAuthorsAction } from "~/api/mutations";
import { queryAuthors, queryCurrentUserOrLogin } from "~/api/queries";
import { type Confirm } from "~/components/confirm";
import { type Message } from "~/components/notify";

export const route = {
  preload: () => {
    queryCurrentUserOrLogin();
    queryAuthors();
  },
};

export default function Authors() {
  const navigate = useNavigate();

  const user = createAsync(() => queryCurrentUserOrLogin());
  const authors = createAsync(() => queryAuthors());

  const useDeleteAuthorAction = useAction(deleteAuthorAction);
  const useDeleteAuthorsAction = useAction(deleteAuthorsAction);

  const deleteItem = async (id: string, event: MouseEvent) => {
    event.preventDefault();

    const onConfirm = async () => {
      try {
        await useDeleteAuthorAction(id);
        const notifyEvent = new CustomEvent<Message>('notify', {
          detail: {
            type: 'info',
            title: 'Author Deleted',
            timeout: 3000,
          },
        });
        document.dispatchEvent(notifyEvent);
      } catch (error: any) {
        const notifyEvent = new CustomEvent<Message>('notify', {
          detail: {
            type: 'error',
            title: 'Error',
            text: error.message,
          },
        });
        document.dispatchEvent(notifyEvent);
      }
    };

    const name = authors()?.find(item => item.id === id)?.name;
    const confirmEvent = new CustomEvent<Confirm>('confirm', {
      detail: {
        title: 'Delete Author?',
        text: `You are about to delete ${name} and all quotes by this author.`,
        onConfirm,
      },
    });

    document.dispatchEvent(confirmEvent);
  };

  const deleteSelecteds = (event: MouseEvent) => {
    event.preventDefault();

    const onConfirm = async () => {
      try {
        await useDeleteAuthorsAction(checkedIds());
        const notifyEvent = new CustomEvent<Message>('notify', {
          detail: {
            type: 'info',
            title: 'Authors Deleted',
            timeout: 3000,
          },
        });
        document.dispatchEvent(notifyEvent);
      } catch (error: any) {
        const notifyEvent = new CustomEvent<Message>('notify', {
          detail: {
            type: 'error',
            title: 'Error',
            text: error.message,
          },
        });
        document.dispatchEvent(notifyEvent);
      }
    };

    const confirmEvent = new CustomEvent<Confirm>('confirm', {
      detail: {
        title: 'Delete Authors?',
        text: `You are about to delete ${checkedIds().length} authors and all their quotes.`,
        onConfirm,
      },
    });

    document.dispatchEvent(confirmEvent);
  };

  const [checkedIds, setCheckedIds] = createSignal<Array<string>>([]);

  const handleCheckAll = (event: any) => {
    if (event.currentTarget.checked) {
      const all = authors()!.map(item => item.id);
      setCheckedIds(all);
    } else {
      setCheckedIds([]);
    }
  };

  const toggleChecked = (id: string) => {
    if (checkedIds().includes(id)) {
      setCheckedIds(all => all.filter(item => item !== id));
    } else {
      setCheckedIds(all => [...all, id]);
    }
  };

  return (
    <Show when={user()}>
      <main>
        <Title>Home | Echoes</Title>

        <div class="user-header">
          <h1>Authors</h1>
          <button onClick={() => navigate('new')}>Add New Author</button>
        </div>

        <div class="user-info">
          <p>You can edit authors you’ve added. Deleting an author will also remove all their quotes.</p>
        </div>

        <div class="user-body">
          <div class="toolbar">
            <button
              disabled={!checkedIds().length}
              onClick={deleteSelecteds}
            >Delete Selecteds</button>
          </div>
          <table class="user-authors">
            <thead>
              <tr>
                <th class="col-check">
                  <input
                    type="checkbox"
                    onInput={handleCheckAll}
                    title="Select All"
                  />
                </th>
                <th class="col-name">Author Name</th>
                <th class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              <For each={authors()}>{(autor, index) => {
                return (
                  <tr>
                    <td class="col-check">
                      <input
                        type="checkbox"
                        onInput={[toggleChecked, autor.id]}
                        checked={checkedIds().includes(autor.id)}
                      />
                    </td>

                    <td class="col-name">
                      {autor.name}
                    </td>

                    <td class="col-actions">
                      <button
                        class="edit"
                        onClick={() => navigate(`edit/${autor.id}`)}
                      >Edit</button>
                      <button
                        class="delete"
                        onClick={[deleteItem, autor.id]}
                      >Delete</button>
                    </td>
                  </tr>
                );
              }}
              </For>
            </tbody>
          </table>
          <div class="toolbar">
            <button
              disabled={!checkedIds().length}
              onClick={deleteSelecteds}
            >Delete Selecteds</button>
          </div>
        </div>
      </main>
    </Show>
  );
}