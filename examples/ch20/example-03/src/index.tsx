import { createSignal, Index } from 'solid-js';
import { render } from 'solid-js/web';

function App() {
  const [items, setItems] = createSignal(['apple', 'orange', 'banana']);

  const updateItems = () => setItems(['mango', 'orange', 'banana']);

  const clearItems = () => setItems([]);

  return (
    <main>
      <ul>
        <Index each={items()} fallback={<li>No items.</li>}>
          {(item) => <li>{item()}</li>}
        </Index>
      </ul>
      <div>
        <button onClick={updateItems}>Update State</button>
        <button onClick={clearItems}>Clear Items</button>
      </div>
    </main>
  );
}

render(() => <App />, document.body);