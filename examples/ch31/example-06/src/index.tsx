import {
  createSignal,
  createMemo,
  type Component,
} from 'solid-js';
import { Dynamic, render } from 'solid-js/web';

const En: Component<{ name: string }> = (props) => {
  return <p>Hello, {props.name}!</p>;
};

const Fr: Component<{ name: string }> = (props) => {
  return <p>Bonjour, {props.name}!</p>;
};

function App() {
  const [lang, setLang] = createSignal('en');

  const component = createMemo(() => lang() === 'en' ? En : Fr);

  const handleClick = () => {
    setLang((prev) => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <div>
      <Dynamic component={component()} name="John Doe" />
      <button onClick={handleClick}>Lang: {lang()}</button>
    </div>
  );
}

render(() => <App />, document.body);