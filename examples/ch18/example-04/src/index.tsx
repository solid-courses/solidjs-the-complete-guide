import { createEffect, createSignal, mergeProps } from "solid-js";

const [info, setInfo] = createSignal({
  name: 'John Doe',
  age: 44
});

const [profile, setProfile] = createSignal({
  role: 'admin',
  email: 'john@example.com'
});

const user = mergeProps(info, profile);

createEffect(() => {
  console.log(user);
});

setInfo({ name: 'Jenny Doe', age: 30 });
setProfile({ role: 'user', email: 'johnD@example.com' });