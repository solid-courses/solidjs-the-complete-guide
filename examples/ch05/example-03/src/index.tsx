import { createEffect, createSignal } from 'solid-js';

const [count, setCount] = createSignal(10, {
  equals: false,
});

createEffect(() => console.log(count()));

setCount(10);