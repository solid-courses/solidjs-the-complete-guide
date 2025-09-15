import { For, Index, createSignal } from 'solid-js';
import { render } from 'solid-js/web';

export const App = () => {
  const array = ['apple', 'orange', 'banana'];
  const [items, setItems] = createSignal(array);

  const handleInput = (index: number, event: InputEvent) => {
    setItems((prev) => {
      const next = [...prev];
      next[index] = (event.currentTarget as HTMLInputElement).value;
      return next;
    });
  };

  return (
    <div>
      <h2>Using For</h2>
      <ul>
        <For each={items()}>
          {(item, index) => (
            <li>
              <input value={item} oninput={[handleInput, index()]} />
            </li>
          )}
        </For>
      </ul>
      <h2>Using Index</h2>
      <ul>
        <Index each={items()}>
          {(item, index) => (
            <li>
              <input value={item()} oninput={[handleInput, index]} />
            </li>
          )}
        </Index>
      </ul>
    </div>
  );
};

render(() => <App />, document.body);