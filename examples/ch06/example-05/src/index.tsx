import { createEffect, createRoot, onCleanup } from 'solid-js';

let disposer: () => void;

createRoot((dispose) => {
  disposer = dispose;
  
  createEffect(() => {
    onCleanup(() => console.log('Cleaning Up'));
  });
});

setTimeout(disposer!, 3000);