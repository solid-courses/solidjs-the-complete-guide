import { render } from 'solid-js/web';
import { Match, Switch, createResource, createSignal } from 'solid-js';

const messages: Record<string, string> = {
  en: "Hello",
  fr: "Bonjour"
};

function fetchMessage({ lang }: { lang: string }): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = messages[lang]
      if (!message) {
        reject('Invalid Language');
      } else {
        resolve(message);
      }
    }, 1000);
  });
}

const App = () => {
  const [params, setParams] = createSignal({ lang: "en" });

  const [data] = createResource(params, fetchMessage);

  return (
    <main>
      <Switch>
        <Match when={data.state === 'pending'}>Loading...</Match>
        <Match when={data.state === 'ready'}>Data: {data()}</Match>
        <Match when={data.state === 'errored'}>Failed! {data.error}</Match>
        <Match when={data.state === 'refreshing'}>refreshing...</Match>
      </Switch>
      <div>
        Change Language:
        <button onClick={() => setParams({ lang: "en" })}>EN</button>
        {' '}
        <button onClick={() => setParams({ lang: "fr" })}>FR</button>
        {' '}
        <button onClick={() => setParams({ lang: "ge" })}>GE</button>
      </div>
    </main>
  );
};

render(() => <App />, document.body);