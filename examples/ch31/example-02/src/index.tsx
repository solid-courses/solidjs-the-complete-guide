import { type Component, type JSXElement } from 'solid-js';
import { render } from 'solid-js/web';

const En: Component<{ name: string }> = (props) => {
  return <p>Hello, {props.name}!</p>;
};

const Fr: Component<{ name: string }> = (props) => {
  return <p>Bonjour, {props.name}!</p>;
};

const Greet: Component<{ name: string; lang: string }> = (props) => {
  const components: Record<string, Component<any>> = { en: En, fr: Fr };
  const Tag = components[props.lang];
  return <Tag name={props.name} />;
};

function App() {
  return (
    <div>
      <Greet name="John Doe" lang={'en'} />
      <Greet name="John Doe" lang={'fr'} />
    </div>
  );
}

render(() => <App />, document.body);