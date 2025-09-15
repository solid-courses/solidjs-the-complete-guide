import { render } from "solid-js/web";
import { createSignal } from "solid-js";

const App = () => {
  const [isDisabled, setIsDisabled] = createSignal(false);

  const handleClick = () => setIsDisabled((val) => !val);

  return (
    <div>
      <input disabled={isDisabled()} />
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

render(App, document.body);
