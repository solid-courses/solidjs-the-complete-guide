import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import { Greeting } from './Greeting';

const App = () => {
  const [count, setCount] = createSignal(0);

  const handleClick = () => {
    setCount(c => c + 1);
  };

  return (
    <main>
      Count {count()} <button onClick={handleClick}>Inc</button>
    </main>
  );
};

render(App, document.body);