import { render } from "solid-js/web";
import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";

const Home: Component<RouteSectionProps> = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav><a href="/about">About</a></nav>
    </div>
  )
};

const About: Component<RouteSectionProps> = () => {
  return (
    <div>
      <h1>About</h1>
      <nav><a href="/">Home</a></nav>
    </div>
  )
};

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

render(() => <App />, document.body);