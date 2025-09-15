import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const Counter = () => {
  const [count, setCount] = createSignal(0);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);
  
  return (
    <div>Count: {count()}</div>
  );
}

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
}

render(() => <App />, document.getElementById('root')!);