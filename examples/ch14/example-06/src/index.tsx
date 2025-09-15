import {
  createReaction,
  createRoot,
  createSignal,
  onCleanup,
  onMount
} from 'solid-js';

createRoot(() => {
  const [a, setA] = createSignal(0);
  const [b, setB] = createSignal(0);

  const track = createReaction(() => {
    track(() => a());
    console.log(`a: ${a()} b: ${b()}`);
    onMount(() => console.log(`Mounting`));
    onCleanup(() => console.log(`Cleaning up`));
  });

  track(() => {
    a();
    b();
  });

  setInterval(() => setA(p => p + 1), 500);
  setInterval(() => setB(p => p + 1), 1000);
});