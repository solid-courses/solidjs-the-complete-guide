import { render } from 'solid-js/web';

const App = () => {
  const handler = {
    once: false,
    passive: false,
    capture: true,
    handleEvent(event: MouseEvent) {
      console.log(event);
    },
  };

  return (
    <div>
      <button on:click={handler}>Button</button>
    </div>
  );
}

render(() => <App />, document.body);