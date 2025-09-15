import {
  A,
  Route,
  RouteSectionProps,
  Router,
  useParams
} from "@solidjs/router";
import { Component } from "solid-js";
import { render } from "solid-js/web";

const Home: Component<RouteSectionProps> = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the homepage of our app. Explore and enjoy!</p>
    </div>
  )
};
const About: Component<RouteSectionProps> = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Learn more about our company and the team behind it.</p>
    </div>
  )
};

const Users: Component<RouteSectionProps> = () => (
  <div>
    <h1>Users</h1>
    <nav>
      <A href="1">User 1</A>
      <A href="2">User 2</A>
    </nav>
  </div>
);

const UserDetail: Component<RouteSectionProps> = (props) => {
  return <h1>Details for User {props.params.id}</h1>;
};

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <main>
      <header>
        <nav>
          <A href="/">Home</A>
          <A href="/about">About</A>
          <A href="/users">Users</A>
        </nav>
      </header>
      {props.children}
    </main>
  );
};

const App = () => {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" >
        <Route path="/" component={Users} />
        <Route path="/:id" component={UserDetail} />
      </Route>
    </Router>
  );
};

render(() => <App />, document.body);