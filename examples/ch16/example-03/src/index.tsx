import { Component, createRoot, onCleanup, onMount } from 'solid-js';
import { render } from 'solid-js/web';

const Modal: Component<{ close: () => void }> = (props) => {
  let div: HTMLDivElement;

  onMount(() => {
    console.log('Mounting');
  });

  onCleanup(() => {
    console.log('Cleaning up');
    div.remove();
  });

  const divStyle = `position: relative; border: 1px solid red`;
  const buttonStyle = `position: absolute; top: 0; right: 0;`

  return (
    <div style={divStyle} ref={el => div = el}>
      <h2>A Closable Window</h2>
      <div>Use the close button to remove this window.</div>
      <button style={buttonStyle} onClick={props.close}>close</button>
    </div>
  )
};

const App = () => {
  let disposer: () => void;
  
  onCleanup(() => disposer());

  return (
    <div>
      {createRoot((dispose) => {
        disposer = dispose;
        return <Modal close={dispose} />
      })}
    </div>
  );
};

render(() => <App />, document.body);