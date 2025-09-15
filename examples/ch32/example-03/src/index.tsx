import { createSignal } from 'solid-js';
import html from 'solid-js/html';
import { render } from 'solid-js/web';

const App = () => {
  const [user, setUser] = createSignal({ name: 'John Doe', age: 30 });

  const handleClick = (_event: Event) => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  return html`<div onClick=${handleClick}>Age: ${() => user().age}</div>`;
};

render(App, document.body);