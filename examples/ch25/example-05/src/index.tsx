import {
  createResource,
  createSignal,
  ErrorBoundary,
  For,
  Match,
  Switch,
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

const [queryParams, setQueryParams] = createSignal<QueryParams>({
  page: 0,
  limit: 3,
});

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
  const [data, { refetch }] = createResource(queryParams, fetcher);

  const prev = () => {
    setQueryParams((state: QueryParams) => ({
      ...state,
      page: state.page - 1,
    }));
  };

  const next = () => {
    setQueryParams((state: QueryParams) => ({
      ...state,
      page: state.page + 1,
    }));
  };

  return (
    <main>
      <Switch>
        <Match when={data.state === 'pending' || data.state === 'refreshing'}>
          Loading
        </Match>
        <Match when={data.state === 'ready'}>
          <div>Page: {queryParams().page} Limit: {queryParams().limit}</div>
          <ul>
            <For each={data()} fallback={<li>No items found!</li>}>
              {item => <li>{item.title} - {item.author}</li>}
            </For>
          </ul>
          <div>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
            <button onClick={refetch}>Refetch</button>
          </div>
        </Match>
        <Match when={data.state === 'errored'}>
          Error Occured: {data.error.message}
        </Match>
      </Switch>
    </main>
  );
};

render(() => <App />, document.body);