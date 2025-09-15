import { createEffect, createSignal, on } from "solid-js";

const [a, setA] = createSignal(0);
const [b, setB] = createSignal(0);

createEffect(on(a, () => console.log(a(), b())));

setInterval(() => setA(a() + 1), 1000);
setInterval(() => setB(b() + 1), 500);