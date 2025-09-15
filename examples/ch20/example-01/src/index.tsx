import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [state, setState] = createSignal([
    { id: '0fb8', name: 'T-Shirt', price: 3.20, quantity: 3 },
    { id: 'ff7c', name: 'Shoes', price: 10.00, quantity: 1 },
    { id: '4651', name: 'Jeans', price: 10.30, quantity: 2 },
  ]);

  const add = (index: number) => {
    setState(items => {
      const updated = [...items];
      updated[index] = {
        ...updated[index],
        quantity: updated[index].quantity + 1,
      };
      return updated;
    });
  };

  const remove = (index: number) => {
    setState(items => {
      const updated = [...items];
      updated[index] = {
        ...updated[index],
        quantity: Math.max(0, updated[index].quantity - 1),
      };
      return updated;
    });
  };

  return (
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
        {state().map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
            <td style={{ display: 'flex', gap: '5px' }}>
              <button onClick={[add, index]}>+</button>
              <button onClick={[remove, index]}>-</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

render(() => <App />, document.body);
