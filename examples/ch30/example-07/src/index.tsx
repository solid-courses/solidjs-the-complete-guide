import { onCleanup } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  
  const handler = (event: any) => {
    console.log(event);
  };

  function ref(el: HTMLButtonElement) {
    el.addEventListener('click', handler);

    onCleanup(() => {
      el.removeEventListener('click', handler);
    });
  }

  return (
    <div>
      <button ref={ref}>Button</button>
    </div>
  );
};

render(() => <App />, document.body);