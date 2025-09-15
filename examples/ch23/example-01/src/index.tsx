import { type Accessor } from 'solid-js';
import { render } from 'solid-js/web';

function highlight(el: HTMLElement, value: Accessor<string>) {
  el.style.setProperty('background-color', value());
}

const App = () => {
  return <div use:highlight={'red'}>Greetings Earthlings!</div>;
};

render(() => <App />, document.body);