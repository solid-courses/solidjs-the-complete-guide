import { Show, Suspense, createResource } from 'solid-js';
import { render } from 'solid-js/web';

const fetcher = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { name: 'John Doe', age: 30 };
};

const App = () => {
  const [user] = createResource(fetcher);

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <div>Name: {user()?.name}</div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {user() && <div>Name: {user()!.name}</div>}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Show when={user()}><div>Name: {user()!.name}</div></Show>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {/* Does not show the fallback component! */}
        <Show when={user.state === 'ready'}><div>Name: {user()!.name}</div></Show>
      </Suspense>
    </main>
  );
};

render(() => <App />, document.body);
