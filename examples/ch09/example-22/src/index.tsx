import { type Component, type JSXElement } from "solid-js";
import { render } from "solid-js/web";

const Child = () => {
  console.log('Rendering Child...')
  return <div>Greetings</div>
}

const Parent: Component<{ children: JSXElement }> = ({ children }) => {
  console.log('Rendering Parent..');
  return <div>{children}</div>;
}

const App = () => {
  console.log('Rendering App..');

  return (
    <Parent>
      <Child />
    </Parent>
  );
}

render(() => <App />, document.body);