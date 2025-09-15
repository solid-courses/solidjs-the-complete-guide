import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [state, setState] = createSignal(true);

  const toggle = () => setState(!state());

  if (state()) {
    return (
      <div>State is TRUE! <button onClick={toggle}>Toggle</button></div>
    );
  }

  return (
    <div>State is FALSE! <button onClick={toggle}>Toggle</button></div>
  );
};

render(() => <App />, document.body);