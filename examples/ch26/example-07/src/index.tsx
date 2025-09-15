import { Suspense, createResource } from 'solid-js';
import { render } from 'solid-js/web';

const fetcher: () => Promise<number> = () => {
  const rand = Math.round(Math.random() * 1000);
  return new Promise((resolve) => {
    setTimeout(() => resolve(rand), rand);
  });
};

const Data = () => {
  const [data1] = createResource(fetcher);
  return <div>data1: {data1()}</div>;
};

const ChildSuspense = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading child...</div>}>
        <Data />
        <Data />
        <Data />
      </Suspense>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading parent...</div>}>
        <div>Parent Component</div>
        <ChildSuspense />
      </Suspense>
    </div>
  );
};

render(() => <App />, document.body);