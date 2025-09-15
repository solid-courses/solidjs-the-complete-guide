import { render } from 'solid-js/web';
import {
  createResource,
  createSignal,
  ErrorBoundary,
  Show,
  Suspense,
} from 'solid-js';

const content = [
  'Welcome to our website where we share our journey and the values that drive our vision.',
  'Explore our latest insights and stories, featuring expert opinions from our team.',
  'Dive into detailed discussions on industry trends, case studies, and best practices.',
];

const fetcher: (index: number) => Promise<string> = (index: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      index >= 0 && index < content.length
        ? resolve(content[index])
        : reject('Not found');
    }, 1000);
  });
};

const style = `
.tabs {
  display: flex;
  gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid gray;
}

.tabs > li {
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.tabs > li.active {
  border-color: green;
  color: green;
}

.tab {
  background-color: #eee;
  padding: 1rem;
}
`;

const App = () => {
  const [tab, setTab] = createSignal(0);
  const [data] = createResource(tab, fetcher);

  const updateTab = (value: number) => () => {
    setTab(value);
  };

  return (
    <ErrorBoundary fallback={(err) => <div>Error: {String(err)}</div>}>
      <style>{style}</style>
      <ul class="tabs">
        <li
          classList={{ active: tab() === 0 }}
          onclick={updateTab(0)}
        >About</li>
        <li
          classList={{ active: tab() === 1 }}
          onclick={updateTab(1)}
        >Blog</li>
        <li
          classList={{ active: tab() === 2 }}
          onclick={updateTab(2)}
        >Posts</li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Show when={data()} fallback={<div>No content to display!</div>}>
          <div class="tab">{data()}</div>
        </Show>
      </Suspense>
    </ErrorBoundary>
  );
};

render(() => <App />, document.body);