import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const Counter = () => {
  const [count, setCount] = createSignal(0);

  const handleClick = () => {
    setCount(count() + 1);
  };

  return (
    <div onClick={handleClick}>Count: {count()}</div>
  )
}

render(() => <Counter />, document.querySelector('#root')!);