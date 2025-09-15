import { createEffect, createSignal } from 'solid-js';

const [user, setUser] = createSignal({ 
  id: 1,
  name: 'john',
  email: 'john@example.com', 
}, {
  equals: (curr, next) => true,
});

createEffect(() => console.log(user()));

setUser({ ...user(), name: 'Jenny' });