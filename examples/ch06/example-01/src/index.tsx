import { createEffect, createSignal } from 'solid-js';

const [value, setValue] = createSignal(0);

createEffect(() => console.log(value()));

setValue(1);