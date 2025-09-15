import { render } from 'solid-js/web';
import {
  Match,
  ResourceFetcherInfo,
  Switch,
  createResource,
  createSignal
} from 'solid-js';

const messages: Record<string, string> = {
  en: "Hello",
  fr: "Bonjour"
};

function fetchMessage(
  { lang }: { lang: string },
  info: ResourceFetcherInfo<string, string>
): Promise<string> {

  console.log(info);
  
  const arg = typeof info.refetching === 'string' ? info.refetching : lang;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = messages[arg]
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

  const [data, { refetch, mutate }] = createResource(params, fetchMessage);

  return (
    <main>
      <Switch>
        <Match when={data.state === 'pending'}>Loading</Match>
        <Match when={data.state === 'ready'}>Data: {data()}</Match>
        <Match when={data.state === 'errored'}>Failed! {data.error}</Match>
        <Match when={data.state === 'refreshing'}>Refreshing!</Match>
      </Switch>
      <div>
        Change Language:
        <button onClick={() => setParams({ lang: "en" })}>EN</button>
        {' '}
        <button onClick={() => setParams({ lang: "fr" })}>FR</button>
        {' '}
        <button onClick={() => refetch()}>Refetch</button>
        {' '}
        <button onClick={() => refetch('fr')}>Refetch:('fr')</button>
        {' '}
        <button onClick={() => refetch('es')}>Refetch('es')</button>
        {' '}
        <button onClick={() => mutate('Hola!')}>Mutate</button>
      </div>
    </main>
  );
};

render(() => <App />, document.body);