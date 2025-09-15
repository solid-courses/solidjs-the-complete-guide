import { Accessor } from 'solid-js';
import { render } from 'solid-js/web';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      highlight: {
        color: string;
        bgColor: string;
      };
    }
  }
}

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