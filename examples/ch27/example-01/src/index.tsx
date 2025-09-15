import {
  createResource,
  createSignal,
  ErrorBoundary,
  For,
  Show,
  Suspense,
  useTransition,
} from 'solid-js';
import { render } from 'solid-js/web';

type Book = { title: string; author: string };

const books: Array<Book> = [
  { title: 'Anne of Green Gables', author: 'Lucy Maud Montgomery' },
  { title: 'Charlotte’s Web', author: 'E.B. White' },
  { title: 'War and Peace', author: 'Leo Tolstoy' },
  { title: 'The Hours', author: 'Michael Cunningham' },
  { title: 'Huckleberry Finn', author: 'Mark Twain' },
  { title: 'Bleak House', author: 'Charles Dickens' },
  { title: 'Tom Sawyer', author: 'Mark Twain' },
  { title: 'A Room of One’s Own', author: 'Virginia Woolf' },
  { title: 'One Hundred Years of Solitude', author: 'G.G. Marquez' },
  { title: 'Hamlet, Prince of Denmark', author: 'Shakespeare' },
  { title: 'The Lord of the Rings', author: 'J.R. Tolkien' },
];

type QueryParams = { page: number; limit: number };

function fetcher(params: QueryParams): Promise<Array<Book>> {
  const { page, limit } = params;

  const items = books.filter((_item, index) => {
    return index >= limit * page && index < (page + 1) * limit;
  });

  return new Promise((resolve) => {
    setTimeout(() => resolve(items), 500);
  });
}

const App = () => {
  const [queryParams, setQueryParams] = createSignal<QueryParams>({
    page: 0,
    limit: 3,
  });

  const [data, { refetch }] = createResource(queryParams, fetcher);

  const [isPending, startTransition] = useTransition();

  const prev = () => {
    startTransition(() => {
      const state = queryParams();
      setQueryParams({
        ...state,
        page: Math.max(0, state.page - 1),
      });
    });
  };

  const next = () => {
    const state = queryParams();
    startTransition(() => {
      setQueryParams({
        ...state,
        page: state.page + 1,
      });
    });
  };

  return (
    <ErrorBoundary fallback={(err) => <div>Error! {String(err)}</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <div>Page: {queryParams().page} Limit: {queryParams().limit}</div>
        <Show when={data()}>
          <ul style={{ 'opacity': isPending() ? 0.5 : 1 }}>
            <For each={data()} fallback={<li>No items found!</li>}>
              {item => <li>{item.title} - {item.author}</li>}
            </For>
          </ul>
        </Show>
        <div>
          <button disabled={isPending()} onClick={prev}>Prev</button>
          <button disabled={isPending()} onClick={next}>Next</button>
          <button disabled={isPending()} onClick={refetch}>Refetch</button>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

render(() => <App />, document.body);