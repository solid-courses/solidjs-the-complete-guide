import { render } from 'solid-js/web';

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      button: JSX.HTMLAttributes<HTMLButtonElement> & {
        "prop:onclick"?: (event: MouseEvent) => void;
      };
    }
  }
}

const App = () => {
  const handler = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <div>
      <button prop:onclick={handler}>Button</button>
    </div>
  );
}

render(() => <App />, document.body);