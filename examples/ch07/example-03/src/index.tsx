import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';

function Counter() {
  const [count, setCount] = createSignal(1);

  const increment = () => setCount(count() + 1);

  return (
    <div>{
      count() % 2 === 0 ?
        <button style={'color: red'} type="button" onClick={increment}>
          Count: {count()}
        </button>
        :
        <button style={'color: green'} type="button" onClick={increment}>
          Count: {count()}
        </button>
    }</div>
  );
}

render(() => <Counter />, document.body);