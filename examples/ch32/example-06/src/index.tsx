import { createSignal } from 'solid-js';
import h from 'solid-js/h';
import { render } from 'solid-js/web';

function Button(props: any) {
  return h('button', props);
}

function App(): any {
  const [count, setCount] = createSignal(0);

  const increment = (_event: Event) => {
    setCount(c => c + 1);
  };

  return h(Button, { onclick: increment }, () => 'Count: ' + count());
}

render(App, document.body);