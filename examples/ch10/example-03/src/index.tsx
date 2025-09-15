import { batch, createSignal, type Component } from 'solid-js';
import { render } from 'solid-js/web';

const Child: Component<{
  value: number,
  updateCount: (value: number) => void
}> = (props) => {
  return (
    <div>
      <div>Count: {props.value}</div>
      <div style={{ display: 'flex', gap: '0.25em' }}>
        <button onClick={() => props.updateCount(props.value - 1)}>Dec</button>
        <button onClick={() => props.updateCount(props.value + 1)}>Inc</button>
        <button onClick={() => props.updateCount(0)}>Reset</button>
      </div>
    </div>
  );
}

const App = () => {
  const [count, setCount] = createSignal(0);
  const [message, setMessage] = createSignal<undefined | string>();

  const updateCount = (value: number) => {
    if (typeof value === 'number' && value >= 0) {
      batch(() => {
        setCount(value);
        setMessage(undefined);
      });
    } else {
      setMessage(`Value can be less than 0!`);
    }
  }

  return (
    <div>
      <Child value={count()} updateCount={updateCount} />
      {message() && <div>Error: {message()}</div>}
    </div>
  );
}

render(() => <App />, document.body);