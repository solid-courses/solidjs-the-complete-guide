import { createSignal, untrack } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <div>Count: {count()}</div>
      <div>Untracked Count: {untrack(count)}</div>
      <div><button onClick={() => setCount(v => v + 1)}>Inc</button></div>
    </div>
  );
}

render(() => <App />, document.body);