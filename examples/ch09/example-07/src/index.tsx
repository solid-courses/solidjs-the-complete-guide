import { type Component, type JSX } from 'solid-js';
import { render } from 'solid-js/web';

const Message: Component<{ children: JSX.Element }> = (props) => {
  return props.children;
};

const App = () => {
  return (
    <Message>
      <p>Hello! I'm learning SolidJS.</p>
    </Message>
  );
};

render(() => <App />, document.body);
