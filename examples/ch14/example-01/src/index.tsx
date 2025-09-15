import { createComputed, createEffect, createRoot } from 'solid-js';

createRoot(() => {
  createEffect(() => {
    console.log(`Running createEffect callback`);
  });
  
  createComputed(() => {
    console.log(`Running createComputed callback`);
  });
});