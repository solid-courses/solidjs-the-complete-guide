import { type Component, type JSXElement } from 'solid-js';
import { render } from 'solid-js/web';

const A: Component<{ tag: string, children: JSXElement }> = (props) => {
  return (props.tag === 'h1')
    ? <h1>{props.children}</h1>
    : <p>{props.children}</p>;  
}

const B: Component<{ tag: string, children: JSXElement }> = (props) => {
  const tag = {name: props.tag};
  return <{tag.name}>{props.children}</{tag.name}>;
}

const App = () => {

  return (
    <main>
    <A tag="h1">Greetings from A!</A>
    <B tag="h1">Greeting from B!</B>
    </main>
  );
};

render(() => <App />, document.body);