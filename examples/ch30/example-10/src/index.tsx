import { createSignal, onCleanup } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [state, setState] = createSignal([
    { id: 1, title: "T-Shirt", price: 3.20, quantity: 3 },
    { id: 2, title: "Shoes", price: 10.00, quantity: 1 },
    { id: 3, title: "Jeans", price: 10.3, quantity: 2 },
  ]);

  const deleteItem = (event: MouseEvent, id: number) => {
    const items = state().filter(item => item.id !== id);
    setState(items);
  }

  return (
    <ul>
      {state().map(item => (
        <li>
          {item.title} {item.price} {item.quantity}{` `}
          <button onClick={(e) => deleteItem(e, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

render(() => <App />, document.body);