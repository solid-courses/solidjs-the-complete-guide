import { createSignal, For, JSXElement, onCleanup, onMount, Show } from 'solid-js';
import { Portal } from 'solid-js/web';

export interface Message {
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  text?: string;
  timeout?: number;
}

const NotifyModal: () => JSXElement = () => {
  const [messages, setMessages] = createSignal<Array<Message>>([]);

  const closeMessage = (message: Message) => {
    setMessages((prev) => prev.filter((item) => item !== message));
  };

  const handleNotify = (event: Event) => {
    event.preventDefault();
    const { detail } = event as CustomEvent<Message>;
    setMessages((prev) => [detail, ...prev]);
  };

  document.addEventListener('notify', handleNotify);

  onCleanup(() => {
    document.removeEventListener('notify', handleNotify);
  });

  const getWrapperDiv = (el: HTMLDivElement) => {
    el.classList.add('notifications');
  };

  return (
    <Portal mount={document.body} ref={getWrapperDiv}>
      <Show when={messages().length > 0}>
        <For each={messages()}>
          {(message) => {
            const { timeout = 0, type, title, text } = message;

            if (timeout > 0) {
              onMount(() => {
                const fn = () => closeMessage(message);
                const timer = setTimeout(fn, timeout);
                onCleanup(() => clearTimeout(timer));
              });
            };

            return (
              <div classList={{ ["notification is-" + type]: true }}>
                <div class={"title"}>{title}</div>
                {text && <div class={"text"}>{text}</div>}
                <button onClick={[closeMessage, message]}>🗙</button>
              </div>
            );
          }}
        </For>
      </Show>
    </Portal>
  );
};

export default NotifyModal;