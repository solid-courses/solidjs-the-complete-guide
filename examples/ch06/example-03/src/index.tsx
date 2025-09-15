import { createEffect, createSignal } from 'solid-js';

const [count, setCount] = createSignal(10, {
  equals: false,
});

createEffect(() => {
  console.log(count());
}, undefined, { name: 'count' });

setCount(10);