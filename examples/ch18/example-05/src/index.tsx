import { splitProps, type Component } from "solid-js";
import { createStore } from "solid-js/store";
import { render } from "solid-js/web";

const Info: Component<{ name: string; age: number }> = (props) => {
  return (
    <div>
      <h3>User Info</h3>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
    </div>
  );
};

const Profile: Component<{ role: string; email: string }> = (props) => {
  return (
    <div>
      <h3>User Profile</h3>
      <p><strong>Role:</strong> {props.role}</p>
      <p><strong>Email:</strong> {props.email}</p>
    </div>
  );
};

const App = () => {
  const [user, setUser] = createStore({
    name: "John Doe",
    age: 44,
    role: "admin",
    email: "mail@example.com",
  });

  const [info, profile, leftovers] = splitProps(
    user,
    ['name', 'age'],
    ['role', 'email']
  );

  const handleClick = () => {
    setUser(user => ({ ...user, name: 'Jimmy Doe', role: 'user' }));
  };

  return (
    <main style={{ padding: "1em", "font-family": "sans-serif" }}>
      <h2>Dashboard</h2>
      <Info {...info} />
      <Profile {...profile} />
      <div><button onClick={handleClick}>Update User</button></div>
    </main>
  );
};

render(() => <App />, document.body);