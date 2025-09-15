import { batch, createEffect, createSignal } from 'solid-js';

const [name, setName] = createSignal('John Doe');
const [age, setAge] = createSignal(20);

createEffect(() => {
  console.log(name(), age());
});

batch(() => {
  setName('Jenny Doe');
  setAge(25);
});