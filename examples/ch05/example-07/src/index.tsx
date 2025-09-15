import { createSignal } from 'solid-js';

const [value, setValue] = createSignal(0);

setValue(1);

setValue(prev => prev + 1);