import { createEffect, createSignal } from 'solid-js';

const [value, setValue] = createSignal(0);

createEffect((prev) => {
  const current = value();
  console.log({ prev, current });
  return current;
}, 99);

setValue(value() + 1);