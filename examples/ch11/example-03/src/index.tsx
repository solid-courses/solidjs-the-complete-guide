import {
  createContext,
  createMemo,
  createSignal,
  useContext,
  type Accessor,
  type Component,
  type JSX,
  type JSXElement
} from 'solid-js';
import { render } from 'solid-js/web';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: Accessor<User | null>;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>();

const AuthProvider: Component<{ children: JSXElement }> = (props) => {
  const [user, setUser] = createSignal<User | null>(null);

  const login = () => {
    setUser({
      id: 1,
      name: 'Jane Doe',
      email: 'jane@example.com'
    });
  };

  const logout = () => setUser(null);

  const context: AuthContextType = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthControls: Component = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('Missing AuthContext');
  return (
    <div>
      {auth.user() ? (
        <button onClick={auth.logout}>Logout</button>
      ) : (
        <button onClick={auth.login}>Login</button>
      )}
    </div>
  );
};

const UserLayout: Component<{ children: JSXElement }> = (props) => {
  return (
    <section style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>User Dashboard</h2>
      {props.children}
    </section>
  );
};

const UserProfile: Component = () => {
  const auth = useContext(AuthContext);

  // eslint-disable-next-line solid/reactivity
  return createMemo(() => {
    const user = auth?.user();

    if (!user) {
      return <p>No user is logged in.</p>;
    }

    return (
      <div>
        <h3>Profile</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    );
  }) as unknown as JSX.Element;
};

const App: Component = () => {
  return (
    <AuthProvider>
      <h1>Welcome to the App</h1>
      <AuthControls />
      <UserLayout>
        <UserProfile />
      </UserLayout>
    </AuthProvider>
  );
};

render(() => <App />, document.body);