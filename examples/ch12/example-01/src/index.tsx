import {
  createSignal,
  onCleanup,
  onMount,
  type Component,
} from 'solid-js';
import { render } from 'solid-js/web';

const WindowSize: Component = () => {
  const [size, setSize] = createSignal({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const updateSize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  onMount(() => {
    console.log("WindowSize mounted");
    window.addEventListener('resize', updateSize);
  });

  onCleanup(() => {
    console.log("WindowSize unmounted");
    window.removeEventListener('resize', updateSize);
  });

  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {size().width}px</p>
      <p>Height: {size().height}px</p>
    </div>
  );
};

const App = () => {
  const [visible, setVisible] = createSignal(true);

  const handleClick = () => setVisible(v => !v);

  return (
    <main>
      {visible() && <WindowSize />}
      <button onClick={handleClick}> Toggle WindowSize Component</button>
    </main>
  );
};

render(() => <App />, document.body);
