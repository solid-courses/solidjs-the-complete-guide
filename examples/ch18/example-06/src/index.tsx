import { createSignal, observable } from 'solid-js';

const [count, setCount] = createSignal(0);

const obj = observable(count);
obj.subscribe((val) => console.log(val));

setInterval(() => setCount(c => c + 1), 500);