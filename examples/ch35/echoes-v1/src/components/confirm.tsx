import {
  Component,
  For,
  Show,
  createEffect,
  createSignal,
  on,
  onCleanup
} from "solid-js";
import { Portal } from "solid-js/web";

export interface Confirm {
  title: string;
  text?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onConfirm: () => any;
  onCancel?: () => any;
}

const ConfirmModal: Component<{}> = (props) => {
  const [items, setItems] = createSignal<Array<Confirm>>([]);

  let itemsEl: HTMLDivElement;

  const cancelButtons: Array<HTMLButtonElement> = [];

  createEffect(on(items, () => {
    for (const btn of cancelButtons.reverse()) btn.focus();
  }));

  function handleCancel(item: Confirm) {
    const index = items().indexOf(item);
    item.onCancel && item.onCancel();
    cancelButtons.splice(index, 1);
    setItems(prev => prev.filter(el => el !== item));
  }

  function handleOk(item: Confirm) {
    const index = items().indexOf(item);
    item.onConfirm && item.onConfirm();
    cancelButtons.splice(index, 1);
    setItems(prev => prev.filter(el => el !== item));
  }

  function handleKeyUp(event: KeyboardEvent) {
    if (!items().length) return;
    if (event.key === 'Escape') {
      const last = items().at(items().length - 1)!;
      handleCancel(last);
    };
  }

  function handleClickOutside(event: MouseEvent) {
    const el = event.target as HTMLDivElement;
    if (itemsEl.contains(el)) return;
    const last = items().at(items().length - 1)!;
    handleCancel(last);
  }

  const handleConfirmEvent = (event: Event) => {
    event.preventDefault();
    const { detail } = event as CustomEvent<Confirm>;
    setItems(prev => [...prev, detail]);
  };

  document.addEventListener('keyup', handleKeyUp);
  document.addEventListener('confirm', handleConfirmEvent);

  onCleanup(() => {
    cancelButtons.length = 0;
    document.removeEventListener('keyup', handleKeyUp);
    document.removeEventListener('confirm', handleConfirmEvent);
  });

  function overlayRef(el: HTMLDivElement) {
    el.classList.add('confirmations-overlay');
    el.addEventListener('click', handleClickOutside);
  }

  function itemsRef(el: HTMLDivElement) {
    itemsEl = el;
  }

  function cancelButtonRef(el: HTMLButtonElement) {
    cancelButtons.unshift(el);
  }

  return (
    <Show when={items().length > 0}>
      <Portal mount={document.body} ref={overlayRef}>
        <div class="confirmations" ref={itemsRef}>
          <For each={items()}>
            {(item) => (
              <div class="confirmation">
                <div class="title">{item.title}</div>
                {item.text && <div class="detail">{item.text}</div>}
                <div class="buttons">
                  <button
                    class="cancel"
                    ref={cancelButtonRef}
                    onClick={[handleCancel, item]}
                  >Cancel</button>
                  <button
                    class="ok"
                    onClick={[handleOk, item]}
                  >OK</button>
                </div>
              </div>
            )}
          </For>
        </div>
      </Portal>
    </Show>
  );
};

export default ConfirmModal;