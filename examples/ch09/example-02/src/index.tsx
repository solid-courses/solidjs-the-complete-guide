import { type Component } from 'solid-js';
import { render } from 'solid-js/web';

const Greet: Component<{ name: string }> = (props) => {
  const el = document.createElement('h1');
  el.innerHTML = `Hello ${props.name}!`;
  return el;
}

const App = () => {
  return (
    <div>
      <Greet name='john' />
    </div>
  );
}

render(() => <App />, document.body);