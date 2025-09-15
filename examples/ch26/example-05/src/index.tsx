import { Suspense, createResource } from 'solid-js';
import { render } from 'solid-js/web';

const fetcher = async () => {
  return { name: 'John Doe', age: 30 };
};

const App = () => {
  const [user] = createResource(fetcher);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Name: {user().name}</div>
    </Suspense>
  );
};

render(() => <App />, document.body);
