import { createEffect, createSignal } from 'solid-js';

const [user, setUser] = createSignal({ 
  id: 1,
  name: 'John',
  email: 'john@example.com', 
}, {
  equals: (prev, next) => !(prev.id === next.id)
});

createEffect(() => console.log(user()));

setUser({...user(), name: 'Jimmy', id: 2 });