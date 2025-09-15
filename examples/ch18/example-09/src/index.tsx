import { createEffect, createRoot, from } from 'solid-js';

let x = 0;
const data = from((setValue) => {
  const t = setInterval(() => setValue(x++), 500);
  
  // Return a disposer function to clear the timer.
  return () => clearInterval(t);
});

createEffect(() => {
  console.log(data());
});