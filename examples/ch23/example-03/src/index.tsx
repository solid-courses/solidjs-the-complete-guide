import { onCleanup, type Accessor } from 'solid-js';
import { render } from 'solid-js/web';

function highlight(
  el: HTMLElement,
  value: Accessor<{ color: string, bgColor: string }>
) {
  const addHighlight = () => {
    el.style.setProperty('color', value().color);
    el.style.setProperty('background-color', value().bgColor);
  };

  document.addEventListener('click', addHighlight);

  onCleanup(() => {
    document.removeEventListener('click', addHighlight);
  });
}

const App = () => {
  return (
    <div use:highlight={{ color: '#ffffff', bgColor: '#2196F3' }}>
      Greetings Earthlings!
    </div>
  );
};

render(() => <App />, document.body);