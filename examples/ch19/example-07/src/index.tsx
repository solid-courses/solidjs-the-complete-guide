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
      <h1>Welcome to the Dashboard</h1>

      <Show
        keyed
        when={user()}
        fallback={<p>No user is currently logged in.</p>}
      >
        {(value) => (
          <section>
            <h2>User Info</h2>
            <p>Name: {value.name}</p>
            <p>Age: {value.age}</p>
          </section>
        )}
      </Show>

      <button onClick={() => setUser(null)}>Log Out</button>
    </main>
  );
};

render(() => <App />, document.body);