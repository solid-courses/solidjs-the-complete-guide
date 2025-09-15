import { createSignal, Show, type Component } from 'solid-js';
import { render, Portal } from 'solid-js/web';

export const App = () => {
  const [show, setShow] = createSignal(false);

  const open = () => setShow(true);

  const close = () => setShow(false);

  const Modal: Component<{ show: boolean }> = (props) => {
    return (
      <Show when={props.show}>
        <div class="modal">
          Teleported Element
          <button class="close" onClick={close}>Close</button>
        </div>
      </Show>
    );
  }

  return (
    <main>
      <style>{`
        .modal {
          color: #fff;
          background-color: #333;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close {
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
        }
      `}</style>
      <button onClick={open}>Open Modal</button>
      <Portal mount={document.body}>
        <Modal show={show()}/>
      </Portal>
    </main>
  );
};

render(() => <App />, document.body);