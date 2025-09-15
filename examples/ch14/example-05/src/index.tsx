import { createReaction, createSignal } from 'solid-js';

const [value, setValue] = createSignal(0);

const track = createReaction(() => {
  console.log('Running a reaction...');
});

track(value);

setValue(1); // Reaction will be called.
setValue(2); // Noop as reaction is removed from the subscribers.