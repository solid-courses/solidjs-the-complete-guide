import { createEffect, getOwner } from 'solid-js';

createEffect(() => {
  const computation = getOwner();
  console.log('Running a computation..', computation);
}, undefined, { name: 'demo' });