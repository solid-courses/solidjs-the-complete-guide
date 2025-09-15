import { type Component, createSignal } from "solid-js";
import { render } from "solid-js/web";

const UserCard: Component<{ name: string; email: string }> = (props) => {
  return (
    <div class="user-card">
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
};

const App: Component = () => {
  const [users] = createSignal([
    { id: 1, name: "Jane Doe", email: "jane@example.com" },
    { id: 2, name: "John Doe", email: "john@example.com" },
    { id: 3, name: "Sally Doe", email: "sally@example.com" },
  ]);

  return (
    <div>
      <h2>Team Members</h2>
      {users().map((user) => (
        <UserCard name={user.name} email={user.email} />
      ))}
    </div>
  );
};

render(() => <App />, document.body);