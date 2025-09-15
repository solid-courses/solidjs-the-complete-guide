import { createMemo, createSignal, JSXElement } from 'solid-js';
import { render } from 'solid-js/web';

function Counter() {
  const [count, setCount] = createSignal(1);

  const increment = () => setCount(count() + 1);

  return createMemo(() => {
    if (count() % 2 === 0) {
      return (
        <button style={`color: red`} type="button" onClick={increment}>
          Count: {count()}
        </button>
      );
    }

    return (
      <button style={`color: green`} type="button" onClick={increment}>
        Count: {count()}
      </button>
    );
  }) as unknown as JSXElement;
}

render(() => <Counter />, document.body);