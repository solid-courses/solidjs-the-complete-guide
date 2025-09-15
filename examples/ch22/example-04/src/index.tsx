import { createStore, unwrap } from 'solid-js/store';
import { render } from 'solid-js/web';

function App() {
  const [state, setState] = createStore({
    window: {
      x: 40,
      y: 10,
      width: 800,
      height: 600,
    }
  });

  return (
    <div onClick={() => setState('window', 'x', x => x + 10)}>
      <p>Click to update the state!</p>
      <div>Proxied: {state.window.x}</div>
      <div>Unwrapped: {unwrap(state).window.x}</div>
    </div>
  );
}

render(() => <App />, document.body);