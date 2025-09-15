import { type Accessor } from 'solid-js';
import { render } from 'solid-js/web';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      onClick: (event: MouseEvent) => void;
    }
  }
}

function onClick(
  el: HTMLElement,
  accessor: Accessor<(event: MouseEvent) => void>
) {
  el.addEventListener('click', accessor());
}

const App = () => {
  const handler = (event: MouseEvent) => {
    console.log(event);
  }

  return (
    <div use:onClick={handler}>Button</div>
  );
}

render(() => <App />, document.body);