import { createResource, Suspense } from "solid-js";
import { render, } from "solid-js/web";

const fetcher: () => Promise<number> = () => {
  const rand = Math.round(Math.random() * 1000);
  return new Promise((resolve) => {
    setTimeout(() => resolve(rand), rand);
  });
};

const App = () => {
  const [data1] = createResource(fetcher);
  const [data2] = createResource(fetcher);
  const [data3] = createResource(fetcher);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>data1: {data1()}</div>
      <div>data2: {data2()}</div>
      <div>data3: {data3()}</div>
    </Suspense>
  );
};

render(() => <App />, document.body);
