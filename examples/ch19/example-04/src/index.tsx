import { createSignal } from "solid-js";
import { render, Show } from "solid-js/web";

const App = () => {
  const [value, setValue] = createSignal(true);

  return (
    <div>
      <Show when={value()} fallback={<div>Fallback Element</div>}>
        <div>Child Element</div>
      </Show>
      <button onClick={() => setValue((prev) => !prev)}>Toggle Show</button>
    </div>
  );
};

render(() => <App />, document.body);
