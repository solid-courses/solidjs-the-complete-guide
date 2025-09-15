import { Component, JSXElement } from 'solid-js';
import { render } from 'solid-js/web';

const Dynamic: Component<{
  tag: string | Component<any>;
  children: JSXElement;
}> = (props) => {
  if (typeof props.tag === 'function') {
    return props.tag(props.children);
  }

  const el = document.createElement(props.tag);

  if (typeof props.children === 'string') {
    el.innerText = String(props.children);
  } else if (props.children instanceof Node) {
    el.appendChild(props.children);
  } else {
    throw Error('Not implemented');
  }

  return el;
};

const Greeting = () => {
  return <div>Hello World</div>
}

export const App = () => {
  return (
    <div>
      <Dynamic tag="h1">Some Title</Dynamic>
      <Dynamic tag={Greeting}>Another Title</Dynamic>
    </div>
  );
};

render(() => <App />, document.body);