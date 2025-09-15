import { type Component, createSignal } from 'solid-js';
import { render } from 'solid-js/web';

const Display: Component<{ count: number }> = (props) => {
  return <div>Value is {props.count}</div>;
};

const App = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      <Display count={count()} />
    </button>
  );
};

render(() => <App />, document.body);