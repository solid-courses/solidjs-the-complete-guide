import { createComputed, createEffect, createRenderEffect } from 'solid-js';
import { render } from 'solid-js/web';

function App() {
  let divRef: HTMLDivElement;

  createEffect(() => {
    console.log(`Running createEffect callback`);
    console.log(divRef);
  });

  createRenderEffect(() => {
    console.log(`Running createRenderEffect callback`);
    console.log(divRef);
  });

  createComputed(() => {
    console.log(`Running createComputed callback`);
    console.log(divRef);
  });

  return <div ref={(el) => (divRef = el)}>App</div>;
}

render(() => <App />, document.body);