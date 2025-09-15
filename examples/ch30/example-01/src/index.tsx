import { render } from 'solid-js/web';

const App = () => {
  const handler = (event: MouseEvent) => {
    console.log(event);
  }

  return (
    <main>
      <button onClick={handler}>Button</button>
      <button onclick={handler}>Button</button>
    </main>
  );
}

render(() => <App />, document.body);