import { createSignal, type Component, type JSXElement } from 'solid-js';
import { render } from 'solid-js/web';

const Panel: Component<{
  title: string,
  children: JSXElement,
  isActive: boolean,
  onShow: () => void;
}> = (props) => {
  return (
    <section>
      <h3 onClick={props.onShow}>
        {props.isActive ? '▼' : '►'}{props.title}
      </h3>
      {props.isActive && (<p>{props.children}</p>)}
    </section>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  return (
    <main>
      <h2>Accordion Panel</h2>
      <Panel
        title="Item #1"
        isActive={activeIndex() === 0}
        onShow={() => setActiveIndex(0)}
      >
        This is the first item’s body. It is shown by default, until it is collapsed.
      </Panel>
      <Panel
        title="Item #2"
        isActive={activeIndex() === 1}
        onShow={() => setActiveIndex(1)}
      >
        This is the second item’s body. It is hidden by default, until it is expanded.
      </Panel>
    </main>
  );
}

render(() => <App />, document.body);