import { createEffect, createSignal } from 'solid-js';

const [value, setValue] = createSignal(0);

createEffect(() => {
  console.log('Outer', value());

  createEffect(() => {
    console.log('Inner');
  });
});


setValue(value => value + 1);