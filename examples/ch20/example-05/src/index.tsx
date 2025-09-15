import { createSelector, createSignal, For } from 'solid-js';
import { render } from 'solid-js/web';

interface State {
  selected: string | undefined;
  items: Array<{
    id: string;
    name: string,
    price: number,
    quantity: number
  }>
}

const App = () => {
  const [state, setState] = createSignal<State>({
    selected: undefined,
    items: [
      { id: '0fb8', name: 'T-Shirt', price: 3.20, quantity: 3 },
      { id: 'ff7c', name: 'Shoes', price: 10.00, quantity: 1 },
      { id: '4651', name: 'Jeans', price: 10.30, quantity: 2 },
    ]
  });

  const isSelected = createSelector(() => state().selected);

  const add = (index: number) => {
    setState(state => {
      const items = [...state.items];
      items[index] = {
        ...items[index],
        quantity: items[index].quantity + 1,
      };
      return { ...state, items };
    });
  };

  const remove = (index: number) => {
    setState(state => {
      const items = [...state.items];
      items[index] = {
        ...items[index],
        quantity: Math.max(0, items[index].quantity - 1),
      };
      return { ...state, items };
    });
  };

  const clearCart = () => {
    setState({ items: [], selected: undefined });
  };

  const handleChange = (id: string, event: any) => {
    const isChecked = event.target.checked;
    const selected = isChecked ? id : undefined;
    setState(state => ({ ...state, selected }));
  };

  return (
    <main>
      <div>Please select an item by clicking on it.</div>
      <div>Selected Index: {state().selected}</div>
      <table
        border="1"
        cellpadding="6"
        style={{
          'border-collapse': 'collapse',
          border: '1px solid #999'
        }}
      >
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <For
            each={state().items}
            fallback={<tr><td colspan="5">Cart is empty.</td></tr>}
          >
            {(item, index) => (
              <tr style={{ color: isSelected(item.id) ? 'green' : 'inherit' }}>
                <td>
                  <input
                    type="checkbox"
                    onChange={[handleChange, item.id]}
                    checked={isSelected(item.id)}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td style={{ display: 'flex', gap: '5px' }}>
                  <button onclick={[add, index()]}>+</button>
                  <button onclick={[remove, index()]}>-</button>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
      <div><button onClick={clearCart}>Clear Cart</button></div>
    </main>
  );
};

render(() => <App />, document.body);
