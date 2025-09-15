import {
  catchError,
  createMemo,
  createSignal,
  type Component,
  type JSX
} from 'solid-js';
import { render } from 'solid-js/web';

let isBroken = true;
const Broken: Component<{}> = () => {
  if (isBroken) {
    isBroken = false;
    throw new Error('Some Error');
  }
  return <div>Child Component</div>;
};

const CustomErrorBoundary: Component<{ children: JSX.Element }> = (props) => {
  const NO_ERR = Symbol('NO_ERR');
  const [error, setError] = createSignal<any>(NO_ERR);

  const reset = () => setError(NO_ERR);

  return createMemo(() => {
    if (error() !== NO_ERR) {
      return (
        <div>
          Error Occurred
          <button onClick={reset}>Click to reset</button>
        </div>
      );
    }

    return catchError(
      () => props.children,
      (err) => setError(err),
    );
  }) as unknown as JSX.Element;
};

const App = () => {
  return (
    <CustomErrorBoundary>
      <div>
        <h1>A Broken App</h1>
        <Broken />
      </div>
    </CustomErrorBoundary>
  );
}

render(() => <App />, document.body);