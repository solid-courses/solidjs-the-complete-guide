import { createSignal, For } from 'solid-js';
import { render } from 'solid-js/web';

interface Item {
  id: number;
  name: string,
  price: number,
  quantity: number
}

interface State {
  discount: number;
  items: Array<Item>
}

const App = () => {

  const [state, setState] = createSignal<State>({
    items: [],
    discount: 0
  });

  const addItem = () => {
    let item: Item = {
      id: 1,
      name: "T-Shirt",
      price: 10.3,
      quantity: 2
    };

    setState({
      items: [...state().items, item],
      discount: 3,
    });
  }

  return (
    <main>
      <ul>
        <For each={state().items}>
          {item => (
            <li>
              <span>{item.name} x {item.quantity}</span>
              <span>Price: ${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          )}
        </For>
      </ul>
      <div>
        <button onClick={addItem}>Add Item</button>
      </div>
    </main>
  )
}

render(() => <App />, document.body);
