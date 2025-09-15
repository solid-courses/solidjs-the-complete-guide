import { createEffect, createSignal } from 'solid-js';

const [user, setUser] = createSignal({
  id: 1,
  name: 'John',
  email: 'john@example.com',
}, {
  equals: (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
});

createEffect(() => console.log(user()));

// This has no effect
setUser(prev => ({ ...prev, name: 'John' }));

// This one updates the user
setUser(prev => ({ ...prev, name: 'Jenny' }));