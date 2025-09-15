import { render } from "solid-js/web";

function App() {
  let button = <button>Click</button>;
  return (
    <div>
      {button}
      <h1>Hello World</h1>
      {button}
    </div>
  );
}

render(() => <App />, document.body);