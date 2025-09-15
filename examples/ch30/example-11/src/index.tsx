import { render } from "solid-js/web";

const App = () => {
  function handler(value: string, event: MouseEvent) {
    console.log(value);
  };

  return (
    <div>
      <button onClick={[handler, 'some value']}>Button</button>
    </div>
  );
}

render(() => <App />, document.body);