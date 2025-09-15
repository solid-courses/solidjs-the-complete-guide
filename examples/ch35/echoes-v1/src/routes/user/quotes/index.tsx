import { Title } from "@solidjs/meta";
import { action, createAsync, useAction, useNavigate } from "@solidjs/router";
import { createSignal, For, Show } from "solid-js";
import { deleteQuote, deleteQuotes } from "~/api/mutations";
import { queryAuthor, queryCurrentUserOrLogin, queryQuotesByCurrentUser } from "~/api/queries";
import { type Confirm } from "~/components/confirm";
import { type Message } from "~/components/notify";

export const route = {
  preload: () => {
    queryCurrentUserOrLogin();
    queryQuotesByCurrentUser();
  },
};

export default function Quotes() {
  const navigate = useNavigate();

  const user = createAsync(() => queryCurrentUserOrLogin());
  const quotes = createAsync(() => queryQuotesByCurrentUser());

  const deleteQuoteAction = action(deleteQuote, 'delete-quote');
  const deleteQuotesAction = action(deleteQuotes, 'delete-quotes');

  const useDeleteQuoteAction = useAction(deleteQuoteAction);
  const useDeleteQuotesAction = useAction(deleteQuotesAction);

  const deleteItem = async (id: string, event: MouseEvent) => {
    event.preventDefault();

    const onConfirm = async () => {
      try {
        await useDeleteQuoteAction(id);
        const notifyEvent = new CustomEvent<Message>('notify', {
          detail: {
            type: 'info',
            title: 'Quote Deleted',
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
        title: 'Delete Quote?',
        text: `You are about to permanently delete the quote.`,
        onConfirm,
      },
    });

    document.dispatchEvent(confirmEvent);
  };

  const deleteSelecteds = (event: MouseEvent) => {
    event.preventDefault();

    const onConfirm = async () => {
      try {
        await useDeleteQuotesAction(checkedIds());
        const notifyEvent = new CustomEvent<Message>('notify', {
          detail: {
            type: 'info',
            title: 'Quotes Deleted',
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
        title: 'Are You Sure?',
        text: `Your are about to delete ${checkedIds().length} quotes.`,
        onConfirm,
      },
    });

    document.dispatchEvent(confirmEvent);
  };

  const [checkedIds, setCheckedIds] = createSignal<Array<string>>([]);

  const handleCheckAll = (event: any) => {
    if (event.currentTarget.checked) {
      const all = quotes()!.map(item => item.id);
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
          <h1>Quotes</h1>
          <button onClick={() => navigate('new')}>Add New Quote</button>
        </div>

        <div class="user-info">
          <p>You can edit any quote that you’ve created.</p>
        </div>

        <div class="user-body">
          <div class="toolbar">
            <button
              disabled={!checkedIds().length}
              onClick={deleteSelecteds}
            >Delete Selecteds</button>
          </div>
          <table class="user-quotes">
            <thead>
              <tr>
                <th class="col-check">
                  <input
                    type="checkbox"
                    onInput={handleCheckAll}
                    title="Select All"
                  />
                </th>
                <th class="col-quote">Quote</th>
                <th class="col-author">Author</th>
                <th class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              <For each={quotes()}>{(quote, index) => {
                const author = createAsync(() => queryAuthor(quote.author));
                return (
                  <tr>
                    <td class="col-check">
                      <input
                        type="checkbox"
                        onInput={[toggleChecked, quote.id]}
                        checked={checkedIds().includes(quote.id)}
                      />
                    </td>
                    <td class="col-quote">
                      {quote.text}
                    </td>
                    <td class="col-author">
                      {author() ? author()!.name : "Anonymous"}
                    </td>
                    <td class="col-actions">
                      <button
                        class="edit"
                        onClick={() => navigate(`edit/${quote.id}`)}
                      >Edit</button>
                      <button
                        class="delete"
                        onClick={[deleteItem, quote.id]}
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