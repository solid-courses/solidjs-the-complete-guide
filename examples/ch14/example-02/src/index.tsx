import {
  createEffect,
  createRenderEffect,
  createRoot,
  createSignal
} from 'solid-js';

const [count, setCount] = createSignal(0);

createRoot(() => {
  createEffect(() => {
    console.log(`Running effect`, count());
  });

  createRenderEffect(() => {
    console.log(`Running render effect`, count());
  })
});

setInterval(() => setCount(s => s + 1), 1000);