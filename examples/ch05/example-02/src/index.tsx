import { createEffect, createSignal } from 'solid-js';

const [user, setUser] = createSignal({ 
  id: 1,
  name: 'john',
  email: 'john@example.com', 
});

createEffect(() => console.log(user()));

user().name = 'Jenny';

setUser(user());