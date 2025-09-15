import { type Component } from 'solid-js';
import { render } from 'solid-js/web';

const Input: Component<{
  ref: HTMLInputElement
}> = (props) => {
  return <input ref={props.ref} />;
};

const Button: Component<{
   onClick: () => void 
}> = (props) => {
  return <button onClick={props.onClick}>Focus</button>;
};

const App = () => {
  let input!: HTMLInputElement;

  const handleClick = () => {
    input.focus();
  };

  return (
    <div>
      <Input ref={input} />
      <Button onClick={handleClick} />
    </div>
  );
};

render(() => <App />, document.body);