import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [state, setState] = createSignal(true);

  const toggle = () => setState(!state());

  return (
    <div>
      {state()
        ? <div>State is TRUE!</div>
        : <div>State is FALSE!</div>
      }
      <button onClick={toggle}>Toggle</button>
    </div>
  )
};

render(() => <App />, document.body);