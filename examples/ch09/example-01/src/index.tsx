import { type Component } from 'solid-js';
import { render } from 'solid-js/web';

const Greet: Component<{ name: string }> = (props) => {
  return `Hello ${props.name}!`;
}

const App = () => {
  return (
    <div>
      <Greet name='john' />
    </div>
  );
}

render(() => <App />, document.body);