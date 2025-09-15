import { createEffect, createSignal, on } from 'solid-js';

const [count, setCount] = createSignal(0);
const [greeting, setGreeting] = createSignal("Hello!");

createEffect(on([count, greeting], () => {
  console.log('We can track multiple signals.');
}));

setCount(1);
setGreeting('Bonjour!');