import { createStore, reconcile } from "solid-js/store";
import { render } from "solid-js/web";

const App = () => {
  const [state, setState] = createStore({
    window: {
      x: 40,
      y: 10,
      width: 800,
      height: 600,
    }
  });

  let incomingState = {
    x: 55,
    y: 55,
    width: 800,
    height: 600,
  };

  // Let’s delay the update to observe its effect
  setTimeout(() => {
    setState('window', reconcile(incomingState, { merge: true }));
  }, 1000);

  return (
    <div>
      <div>{state.window.x}</div>
      <div>{state.window.y}</div>
      <div>{state.window.width}</div>
      <div>{state.window.height}</div>
    </div>
  );
}

render(() => <App />, document.body);