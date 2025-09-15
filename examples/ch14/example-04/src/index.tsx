import { createDeferred, createEffect } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  createDeferred(() => {
    console.log(`Running deferred`);
  });

  createEffect(() => {
    console.log(`Running effect`);
  });

  return <div>App</div>;
};

render(() => <App />, document.body);