import { createEffect, createRoot, createSignal, onCleanup } from 'solid-js';

// An effect without an owner.
createEffect(() => {
  console.log('Running some expensive computation..');
});

createRoot(() => {
  createEffect(() => {
    console.log('Running some expensive computation..');
  });
});