import { type Component } from "solid-js";
import { render } from "solid-js/web";

const Button: Component<{ el: HTMLInputElement }> = (props) => {
  const handleClick = () => {
    props.el.focus();
    props.el.style.setProperty('outline', '1px solid green');
  };

  return <button onclick={handleClick}>Focus</button>;
}

export const App = () => {
  let input!: HTMLInputElement;

  return (
    <div>
      <input ref={input} placeholder="Name" />
      <Button el={input} />
    </div>
  );
}

render(() => <App />, document.body);