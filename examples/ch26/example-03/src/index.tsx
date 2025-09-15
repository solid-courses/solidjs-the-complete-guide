import { ErrorBoundary, Suspense, createResource } from 'solid-js';
import { render } from 'solid-js/web';

const fetcher: () => Promise<number> = () => {
  const rand = Math.round(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(
      () => (rand > 500 ? resolve(rand) : reject(`Condition Failed`)),
      rand,
    );
  });
};

const App = () => {
  const [data1] = createResource(fetcher);
  const [data2] = createResource(fetcher);
  const [data3] = createResource(fetcher);

  return (
    <ErrorBoundary fallback={(err) => <div>Error: {String(err)}</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <div>data1: {data1()}</div>
        <div>data2: {data2()}</div>
        <div>data3: {data3()}</div>
      </Suspense>
    </ErrorBoundary>
  );
};

render(() => <App />, document.body);