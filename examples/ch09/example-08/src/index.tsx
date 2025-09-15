import { type Component, type JSX } from 'solid-js';
import { render } from 'solid-js/web';

const User: Component<{
  name: string;
  children: JSX.Element
}> = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <div>User: {props.name}</div>
      <div>{props.children}</div>
    </div>
  );
};

const App = () => {
  return (
    <User name="Alice">
      <p>Hello! I'm learning SolidJS.</p>
    </User>
  );
};

render(() => <App />, document.body);