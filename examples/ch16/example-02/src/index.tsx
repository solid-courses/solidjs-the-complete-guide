import { createEffect, createRoot, createSignal, onCleanup } from 'solid-js';

const [count, setCount] = createSignal(0);

let disposer: () => void;
createRoot((dispose) => {
  disposer = dispose;

  createEffect(() => {
    console.log('Running some expensive computation..');
    onCleanup(() => console.log('Cleaning up!'));
  });

  createEffect(() => console.log(`Count is ${count()}`));
});

setTimeout(disposer!, 3000);
setInterval(() => setCount(prev => prev + 1), 500);