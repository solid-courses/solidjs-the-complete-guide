import { render } from 'solid-js/web';

export const App = () => {
  return (
    <div>Hello World!</div>
  );
}

render(() => <App />,  document.getElementById('root')!);