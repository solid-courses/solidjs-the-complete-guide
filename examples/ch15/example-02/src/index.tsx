import { ErrorBoundary, type Component } from 'solid-js';
import { render } from 'solid-js/web';

let isBroken = true;
const Broken: Component<{}> = () => {
  if (isBroken) {
    isBroken = false;
    throw new Error('Some Error');
  }
  return <div>Child Component</div>;
};

const App = () => {
  const handler = (err: Error, reset: () => void) => {
    console.log(err);
    return (
      <div>
        Error Occurred!
        <button onClick={reset}>Click to reset</button>
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={handler}>
      <div>
        <h1>A Broken App</h1>
        <Broken />
      </div>
    </ErrorBoundary>
  );
}

render(() => <App />, document.body);