import { createSignal } from 'solid-js';
import h from 'solid-js/h';
import { render } from 'solid-js/web';

function App(): any {
  const [count, setCount] = createSignal(0);

  const increment = () => {
    setCount(c => c + 1);
  };

  return h('button', { onclick: increment }, () => 'Count: ' + count());
}

render(App, document.body);