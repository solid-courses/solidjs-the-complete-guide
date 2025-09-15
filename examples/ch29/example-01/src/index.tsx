import { render } from 'solid-js/web';
import { Show, createSignal, lazy } from 'solid-js';

const Dialog = lazy(() => import('./Dialog'));

export const App = () => {
  const [show, setShow] = createSignal(false);

  return (
    <div>
      <div>Please click on the button to toggle the state.</div>
      <button onClick={() => setShow(prev => !prev)}>Toggle</button>
      <Show when={show()}>
        <Dialog message="Hi, you’ve got a message" />
      </Show>
    </div>
  );
}

render(() => <App />, document.body);