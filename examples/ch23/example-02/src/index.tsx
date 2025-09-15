import { Accessor } from 'solid-js';
import { render } from 'solid-js/web';

function highlight(
  el: HTMLElement,
  value: Accessor<{ color: string, bgColor: string }>
) {
  el.style.setProperty('color', value().color);
  el.style.setProperty('background-color', value().bgColor);
}

const App = () => {
  return (
    <div use:highlight={{ color: 'red', bgColor: 'blue' }}>
      Greetings Earthlings!
    </div>
  );
};

render(() => <App />, document.body);