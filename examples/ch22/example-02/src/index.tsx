import { createSignal, For } from 'solid-js';
import { render } from 'solid-js/web';
import { createStore } from "solid-js/store";

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

  const [state, setState] = createStore<State>({
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

    setState('items', all => [...all, item]);
  }

  const updateDiscount = () => {
    setState('discount', 7);
  }

  return (
    <main>
      <ul>
        <For each={state.items}>
          {item => (
            <li>
              <span>{item.name} x {item.quantity}</span>
              <span>Price: ${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          )}
        </For>
      </ul>
      <div>Discount: {state.discount}$</div>
      <div>
        <button onClick={addItem}>Add Item</button>
        <button onClick={updateDiscount}>Apply Discount</button>
      </div>
    </main>
  )
}

render(() => <App />, document.body);
