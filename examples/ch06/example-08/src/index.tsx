import { createEffect, createSignal, untrack } from 'solid-js';

const [count, setCount] = createSignal(0);
const [greeting, setGreeting] = createSignal('Hello!');

createEffect(() => {
  untrack(() => {
    console.log(count(), greeting());
  });
});

setCount(1);
setGreeting('Bonjour!');