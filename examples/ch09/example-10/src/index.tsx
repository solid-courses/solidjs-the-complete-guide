import { type Component, type JSX } from 'solid-js';
import { render } from 'solid-js/web';

const Wrapper: Component<{ children: JSX.Element }> = (props) => {
  const children = props.children;

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (child instanceof Node) {
        (child as HTMLElement).style.border = "1px solid orange";
      }
    });
  } else if (children instanceof Node) {
    (children as HTMLElement).style.border = "1px solid red";
  }

  return children;
};

const App = () => {
  return (
    <>
      <Wrapper>
        <p>Single log entry</p>
      </Wrapper>

      <Wrapper>
        <p>First log entry</p>
        <p>Second log entry</p>
        <p>Third log entry</p>
      </Wrapper>
    </>
  );
};

render(() => <App />, document.body);
