import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [active, setActive] = createSignal();

  const items = [
    { id: 1, title: "T-Shirt", price: 3.20, quantity: 3 },
    { id: 2, title: "Shoes", price: 10.00, quantity: 1 },
    { id: 3, title: "Jeans", price: 10.3, quantity: 2 },
  ];

  const handleClick = (id: number) => setActive(id);

  return (
    <main>
      <style>
        {`
        .items {
          margin: 0;
          border: 1px solid green;
        }
        
        .item {
          cursor: pointer;
        }

        .item:hover {
          color: red;
        }

        .is-active {
          color: red;
        }
      `}
      </style>
      <ul class="items">
        {items.map(item => (
          <li
            class='item'
            classList={{ 'is-active': active() === item.id }}
            onClick={[handleClick, item.id]}
          >
            {item.title} {item.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

render(() => <App />, document.body);