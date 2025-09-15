import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { render } from "solid-js/web";

const Home: Component<RouteSectionProps> = () => {
  return (
    <main>
      <h1>Welcome</h1>
      <p>This is the home page using a custom layout.</p>
      <p><a href="/about">Go to About</a> to see a different layout in action.</p>
    </main>
  );
};

const About: Component<RouteSectionProps> = () => {
  return (
    <main>
      <h1>About</h1>
      <p>This page uses a different layout than the home page.</p>
      <p>Here you could include information about your project or team.</p>
      <p><a href="/">Back to Home</a></p>
    </main>
  );
};

const HomeLayout: Component<RouteSectionProps> = (props) => {
  return (
    <main>
      <header>Home Header</header>
      {props.children}
      <footer>Home Footer</footer>
    </main>
  );
}

const DefaultLayout: Component<RouteSectionProps> = (props) => {
  return (
    <main>
      <header>About Header</header>
      {props.children}
      <footer>About Footer</footer>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Route path="/" component={HomeLayout}>
        <Route path="/" component={Home} />
      </Route>
      <Route component={DefaultLayout}>
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
}

render(() => <App />, document.body);