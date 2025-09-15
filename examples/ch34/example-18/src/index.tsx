import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { Component, createMemo, JSXElement } from "solid-js";
import { render } from "solid-js/web";

const Home = () => {
  return (
    <main>
      <h1>Welcome</h1>
      <p>This is the home page using a custom layout.</p>
      <p>
        Go to <a href="/about">/about</a> to see a different layout in action.
      </p>
    </main>
  );
};

const About = () => {
  return (
    <main>
      <h1>About</h1>
      <p>This page uses a different layout than the home page.</p>
      <p>Here you could include information about your project or team.</p>
      <p><a href="/">Back to Home</a></p>
    </main>
  );
};

const Layout: Component<RouteSectionProps> = (props) => {
  return createMemo(() => {
    if (props.location.pathname === '/') {
      return (
        <main>
          <header>Home Header</header>
          {props.children}
          <footer>Home Footer</footer>
        </main>
      )
    }

    return (
      <main>
        <header>About Header</header>
        {props.children}
        <footer>About Footer</footer>
      </main>
    );
  }) as unknown as JSXElement;
}

function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

render(() => <App />, document.body);