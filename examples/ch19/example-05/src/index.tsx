import { createSignal } from "solid-js";
import { render, Show } from "solid-js/web";

type User = { name: string; age: number };

const App = () => {
  const [user, setUser] = createSignal<User | null>({
    name: 'Jenny Doe',
    age: 34,
  });

  return (
    <main>
      <Show when={user()} fallback={<p>No user found.</p>}>
        <h2>User Info</h2>
        <p>Name: {user()!.name}</p>
        <p>Age: {user()!.age}</p>
      </Show>
      <button onClick={() => setUser(null)}>Log Out</button>
    </main>
  );
};

render(() => <App />, document.body);
