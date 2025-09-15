import { createEffect, createSignal } from 'solid-js';

const [a, setA] = createSignal(4);
const [b, setB] = createSignal(10);

const sum = () => a() + b();

createEffect(() => {
  console.log(sum());
});

setA(prev => prev + 1);