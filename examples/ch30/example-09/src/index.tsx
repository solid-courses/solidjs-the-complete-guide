import { onCleanup, onMount, type Accessor } from "solid-js";
import { render } from "solid-js/web";

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      focusShortcut: string;
    }
  }
}

function focusShortcut(el: HTMLElement, value: Accessor<string>) {
  const focusEl = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === value()) {
      event.preventDefault();
      el.focus();
    }
  };

  onMount(() => {
    document.addEventListener('keydown', focusEl, false);
  });

  onCleanup(() => {
    document.removeEventListener('keydown', focusEl);
  });
}

const App = () => {
  return (
    <input use:focusShortcut={'f'} placeholder="input" />
  );
}

render(() => <App />, document.body);