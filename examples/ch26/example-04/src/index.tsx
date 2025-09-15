import { Match, Suspense, Switch, createResource } from 'solid-js';
import { render } from 'solid-js/web';

const fetcher: () => Promise<number> = () => {
  const rand = Math.round(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(
      () => (rand > 300 ? resolve(rand) : reject(`Condition Failed`)),
      rand,
    );
  });
};

const App = () => {
  const [data] = createResource(fetcher);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Match when={data.loading}>{data()}</Match>
        <Match when={data.error}>Error Occurred</Match>
        <Match when={data}><div>Value: {data()}</div></Match>
      </Switch>
    </Suspense>
  );
};

render(() => <App />, document.body);