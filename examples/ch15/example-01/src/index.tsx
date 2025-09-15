import { ErrorBoundary } from 'solid-js';
import { render } from 'solid-js/web';

const Broken = () => {
  throw new Error('Some Error');
  return (
    <div>Child Component</div>
  )
}

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Error Occurred!</div>}>
      <div>
        <h1>A Broken App</h1>
        <Broken />
      </div>
    </ErrorBoundary>
  );
}

render(() => <App />, document.body);