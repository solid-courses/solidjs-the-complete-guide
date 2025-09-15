import { createEffect, createRoot, onCleanup, onMount } from 'solid-js';

let disposer!: () => void;

createRoot((disposable) => {
  disposer = disposable;
  
  onMount(() => {
    console.log('Running onMount callback.');
  });

  onCleanup(() => {
    console.log('Running onCleanup callback.');
  });

  createEffect(() => {
    onMount(() => {
      console.log('Running onMount callback in an effect.');
    });

    onCleanup(() => {
      console.log('Running onCleanup callback in an effect.');
    });
  });
});

disposer();