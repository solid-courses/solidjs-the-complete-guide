import { createMutable } from "solid-js/store";
import { createEffect } from 'solid-js';

const state = createMutable({
  name: 'John Doe',
  age: 33,
});

createEffect(() => {
  console.log({ ...state });
});

state.age = 44;
state.name = 'Jenny Doe';