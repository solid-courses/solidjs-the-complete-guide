import { onCleanup, onMount } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  let el: HTMLButtonElement;

  const handler = (event: MouseEvent) => {
    if(el === event.target) {
      console.log('Button is clicked');
    }
  }

  onMount(() => {
    document.addEventListener('click', handler);
  });

  onCleanup(() => {
    document.removeEventListener('click', handler);
  });

  return (
    <div>
      <button ref={el!}>Click Here</button>
    </div>
  );
}

render(() => <App />, document.body);