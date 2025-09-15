import { createEffect, createSignal } from 'solid-js';

const [user, setUser] = createSignal({ 
  id: 1,
  name: 'john',
  email: 'john@example.com', 
});

const { name, email } = user();

createEffect(() => console.log(name, email));
//                              ↑     ↑
//                           regular variables

setUser({ ...user(), name: 'Jenny' });