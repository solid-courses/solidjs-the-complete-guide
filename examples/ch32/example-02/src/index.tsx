import { createSignal } from 'solid-js';
import html from 'solid-js/html';
import { render } from 'solid-js/web';

function Button(props: Record<string, any>) {
  return html`<button class="btn-primary" ...${props} />`;
}

function App() {
  const [count, setCount] = createSignal(0);

  const increment = (_event: Event) => {
    setCount(c => c + 1);
  };

  return html`<${Button} type="button" onClick=${increment}>Count: ${count}<//>`;
}

render(App, document.body);