import { createMemo, createSignal, type JSX } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [state, setState] = createSignal(true);

  const toggle = () => setState(!state());

  return createMemo(() => {
    if (state()) {
      return (
        <div>State is TRUE! <button onClick={toggle}>Toggle</button></div>
      );
    }
    return (
      <div>State is FALSE! <button onClick={toggle}>Toggle</button></div>
    );
  }) as unknown as JSX.Element
};

render(() => <App />, document.body);