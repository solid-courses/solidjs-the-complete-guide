import { createSignal, type Accessor, type Component } from 'solid-js';
import { render } from 'solid-js/web';

const Counter: Component<{ value: Accessor<number> }> = ({ value }) => {
  return <span>Count: {value()}</span>;
};

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <Counter value={count} />
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
}

render(() => <App />, document.body);