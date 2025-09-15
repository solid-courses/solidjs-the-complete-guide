import { type Component } from 'solid-js';
import { render } from 'solid-js/web';

export const App = () => {
  const User: Component<{ name: string, age?: number }> = (props) => {
    return <div>Name: {props.name} Age: {props.age ?? 'unknown'}</div>
  }

  return (
    <div>
      <User name="John Doe" />
      <User name="John Doe" age={20} />
    </div>
  );
};

render(() => <App />, document.body);