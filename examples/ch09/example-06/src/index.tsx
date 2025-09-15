import { type Component } from 'solid-js';
import { render } from 'solid-js/web';

export const App = () => {
  const User: Component<{ name: string, age?: number }> = (props) => {
    return <div>Name: {props.name} Age: {props.age || 'unknown'}</div>
  }

  return (
    <User name={"John Doe"} age={0} />
  );
};

render(() => <App />, document.body);