import { createEffect, createSignal, getOwner, runWithOwner } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [count, setCount] = createSignal(0);

  setTimeout(() => {
    createEffect(() => {
      console.log(count());
    });
  }, 1000);

  const handleClick = () => setCount(count() + 1);

  return (
    <div>
      Count: {count()} <button onClick={handleClick}>Inc</button>
    </div>
  );
};

render(() => <App />, document.body);
