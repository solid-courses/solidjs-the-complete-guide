import { JSX } from 'solid-js';
import { render } from 'solid-js/web';

const Greet = () => {
  return (() => "Hello World!") as unknown as JSX.Element
};

function App() {
  return (
    <Greet />
  );
}

render(() => <App />, document.body);