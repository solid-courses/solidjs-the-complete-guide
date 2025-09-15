import { createMemo, createSelector, createSignal, For } from 'solid-js';
import { render } from 'solid-js/web';

interface State {
  selecteds: Array<string>;
  items: Array<{
    id: string;
    name: string,
    price: number,
    quantity: number
  }>
}

const App = () => {
  const [state, setState] = createSignal<State>({
    selecteds: [],
    items: [
      { id: '0fb8', name: 'T-Shirt', price: 3.20, quantity: 3 },
      { id: 'ff7c', name: 'Shoes', price: 10.00, quantity: 1 },
      { id: '4651', name: 'Jeans', price: 10.30, quantity: 2 },
    ]
  });

  const isSelected = createSelector<Array<string>, string>(
    () => state().selecteds,
    (received, stored) => {
      return stored.includes(received);
    });

  const totalCost = createMemo(() => {
    let total = 0;
    const items = state().items;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    return total;
  });

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
    setState({ items: [], selecteds: [] });
  };

  const removeSelecteds = () => {
    setState(state => {
      const items = state.items.filter(item => {
        return !state.selecteds.includes(item.id);
      });
      return { items, selecteds: [] };
    });
  };

  const handleSelectAll = (event: any) => {
    const isChecked = event.target.checked;
    setState(state => {
      const selecteds = isChecked
        ? state.items.map(item => item.id)
        : [];
      return { ...state, selecteds };
    });
  };

  const handleChange = (id: string, event: any) => {
    const isChecked = event.target.checked;
    setState(state => {
      const selecteds = isChecked
        ? [...state.selecteds, id]
        : state.selecteds.filter(item => item !== id);
      return { ...state, selecteds };
    });
  };

  return (
    <main>
      <div>Please toggle selection of an item by clicking on it.</div>
      <div>Selected Items: {JSON.stringify(state().selecteds)}</div>
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
            <th>
              <input type='checkbox' onChange={handleSelectAll} />
            </th>
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
                    checked={isSelected(item.id)}
                    onChange={[handleChange, item.id]}
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
        <tfoot>
          <tr>
            <th scope="row" colspan="4">Total</th>
            <td>{totalCost().toFixed(2)}$</td>
          </tr>
        </tfoot>
      </table>
      <div>
        <button onClick={removeSelecteds}>Remove Selecteds</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </main>
  );
};

render(() => <App />, document.body);
