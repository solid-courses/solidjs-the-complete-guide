import {
  createResource,
  ErrorBoundary,
  Suspense,
  SuspenseList
} from 'solid-js';
import { render } from 'solid-js/web';

function fetcher(): Promise<number> {
  const rand = Math.round(Math.random() * 2000);
  return new Promise((resolve) => {
    setTimeout(() => resolve(rand), rand);
  });
};

const App = () => {
  const [data1] = createResource(fetcher);
  const [data2] = createResource(fetcher);
  const [data3] = createResource(fetcher);

  return (
    <ErrorBoundary fallback={(err) => <div>Error: {String(err)}</div>}>
      <SuspenseList revealOrder="forwards" tail="collapsed">
        <Suspense fallback={<div>Loading 1...</div>}>
          <div>data1: {data1()}</div>
        </Suspense>
        <Suspense fallback={<div>Loading 2...</div>}>
          <div>data2: {data2()}</div>
        </Suspense>
        <Suspense fallback={<div>Loading 3...</div>}>
          <div>data3: {data3()}</div>
        </Suspense>
      </SuspenseList>
    </ErrorBoundary>
  );
};

render(() => <App />, document.body);