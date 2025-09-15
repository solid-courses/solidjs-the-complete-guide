import { Suspense, createResource } from 'solid-js';
import { render } from 'solid-js/web';

const fetcher: () => Promise<number> = () => {
  const rand = Math.round(Math.random() * 1000);
  return new Promise((resolve) => {
    setTimeout(() => resolve(rand), rand);
  });
};

const Data = () => {
  const [data] = createResource(fetcher);
  return <div>data: {data()}</div>;
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Data />
      <Data />
      <Data />
    </Suspense>
  );
};

render(() => <App />, document.body);