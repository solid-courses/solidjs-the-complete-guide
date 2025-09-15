import { render } from 'solid-js/web';

const Greet = () => {
  return () => "Hello World!";
}

function App() {
  return (
    <Greet />
  );
}

render(() => <App />, document.body);