import { createSignal } from 'solid-js';
import html from 'solid-js/html';
import { render } from 'solid-js/web';

const App = () => {
  const [count, setCount] = createSignal(0);

  const increment = (_event: Event) => {
    setCount(c => c + 1);
  };

  return html`<button type="button" onClick=${increment}>
    Count: ${count}
  </button>`;
};

render(App, document.body);