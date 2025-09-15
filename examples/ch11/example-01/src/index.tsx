import {
  createContext,
  useContext,
  type Component,
  type JSXElement
} from 'solid-js';
import { render } from 'solid-js/web';

interface User {
  name: string;
  email: string;
}

const UserContext = createContext<User>();

const UserLayout: Component<{ children: JSXElement }> = (props) => {
  return (
    <section>
      <h2>Dashboard</h2>
      <div>{props.children}</div>
    </section>
  );
};

const UserProfile: Component = () => {
  const user = useContext(UserContext);
  
  if (!user) return <p>No user found.</p>;

  return (
    <div>
      <h3>Welcome, {user.name}!</h3>
      <p>Your e-mail is {user.email}.</p>
    </div>
  );
};

const App = () => {
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <UserContext.Provider value={user}>
      <UserLayout>
        <UserProfile />
      </UserLayout>
    </UserContext.Provider>
  );
};

render(() => <App />, document.body);
