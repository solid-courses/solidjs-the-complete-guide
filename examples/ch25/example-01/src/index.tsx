import { Match, Switch, createResource } from 'solid-js';
import { render } from 'solid-js/web';

function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Hello'), 1000);
  });
}

const App = () => {
  const [data] = createResource<string>(fetchMessage);
  return (
    <Switch>
      <Match when={data.state === 'pending'}>Loading...</Match>
      <Match when={data.state === 'ready'}>{data()}</Match>
      <Match when={data.state === 'errored'}>Failed!</Match>
    </Switch>
  );
};

render(() => <App />, document.body);