import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(1);
  const handleClick = () => setCount(count() + 1);
  return <div onClick={handleClick}>Count: {count()}</div>
}

render(() => <App />, document.body);