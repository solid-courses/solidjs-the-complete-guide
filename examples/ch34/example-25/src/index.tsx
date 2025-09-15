import {
  Route,
  Router,
  Navigate,
  useNavigate,
  RouteSectionProps,
  useLocation
} from "@solidjs/router";
import { Component, createSignal, Show } from "solid-js";
import { render } from "solid-js/web";

const [isLoggedIn, setIsLoggedIn] = createSignal(false);

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <main>
      <header>
        <nav>
          <a href="/">Home</a> |{" "}
          <a href="/login">Login</a> |{" "}
          <a href="/dashboard">Dashboard</a>
        </nav>
      </header>
      <p>Current route: {props.location.pathname}</p>
      {props.children}
    </main>
  );
};

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to the app. Navigate to the dashboard to see protected content.</p>
  </div>
);

const Login: Component<RouteSectionProps> = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard", { replace: true });
  };

  return (
    <Show
      when={!isLoggedIn()}
      fallback={<Navigate href="/dashboard" />}
    >
      <h1>Login</h1>
      <p>Please click the button below to simulate logging in and access the dashboard.</p>
      <div><button onClick={handleLogin}>Click to Login</button></div>
    </Show>
  );
};

const Dashboard: Component<RouteSectionProps> = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login", { replace: true });
  };

  return (
    <Show
      when={isLoggedIn()}
      fallback={<Navigate href="/login" />}
    >
      <h1>Dashboard</h1>
      <p>This is a protected route only visible to logged-in users.</p>
      <div><button onClick={handleLogout}>Logout!</button></div>
    </Show>
  );
};

function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

render(() => <App />, document.body);