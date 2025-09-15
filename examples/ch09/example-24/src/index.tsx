import { onMount } from "solid-js";
import { render } from "solid-js/web";

function App() {
  let div: HTMLDivElement;

  onMount(() => {
    const rect = div.getBoundingClientRect()
    console.log(JSON.stringify(rect, null, 2));
  });

  function divRef(el: HTMLDivElement) {
    div = el;
  }

  return (
    <div style={`margin-top: 10rem`}>
      <div ref={divRef}>App!</div>
    </div>
  );
}

render(() => <App />, document.body);