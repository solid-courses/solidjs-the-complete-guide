import { createEffect, createSignal } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    setTimeout(() => console.log(count()), 1000);
  });

  const handleClick = () => setCount(count() + 1);

  return (
    <div>
      Count: {count()} <button onClick={handleClick}>Inc</button>
    </div>
  );
};

render(() => <App />, document.body);
