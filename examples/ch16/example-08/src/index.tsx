import { createEffect, createSignal, getOwner, runWithOwner } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    const value = count();
    setTimeout(() => console.log(value), 1000);
  });

  // ↓ This does not fix the problem.
  const currentComputation = getOwner();
  createEffect(() => {
    setTimeout(() => {
      runWithOwner(currentComputation, () => {
        console.log(count(), 'Runs once');
      });
    }, 1000);
  });

  const handleClick = () => setCount(count() + 1);

  return (
    <div>
      Count: {count()} <button onClick={handleClick}>Inc</button>
    </div>
  );
};

render(() => <App />, document.body);
