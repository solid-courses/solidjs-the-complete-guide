import { render } from 'solid-js/web';
import { type Component } from 'solid-js';

const Button: Component<{ onclick: () => void }> = (props) => {
  return <button onClick={props.onclick}>Focus</button>;
};

const App = () => {
  let input!: HTMLInputElement;

  const handleClick = () => {
    input.focus();
  };

  return (
    <div>
      <input ref={input} />
      <Button onclick={handleClick} />
    </div>
  );
};

render(() => <App />, document.body);