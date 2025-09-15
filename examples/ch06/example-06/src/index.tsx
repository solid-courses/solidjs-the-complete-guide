import { createEffect, createSignal, on } from 'solid-js';

const [count, setCount] = createSignal(0);

createEffect(on(count, () => {
  console.log('No need to read a signal for tracking.');
}));

setCount(1);
setCount(2);