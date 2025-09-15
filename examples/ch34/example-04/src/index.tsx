import { render } from "solid-js/web";
import { Router, RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";

const Home: Component<RouteSectionProps> = () => {
  return (
    <div>
      <nav><a href="/about">About</a></nav>
      <h1>Home</h1>
      <p>Welcome to the homepage of our app. Explore and enjoy!</p>
    </div>
  )
};

const About: Component<RouteSectionProps> = () => {
  return (
    <div>
    <nav><a href="/">Home</a></nav>
      <h1>About</h1>
      <p>Learn more about our company and the team behind it.</p>
    </div>
  )
};

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

function App() {
  return (
    <Router>{routes}</Router>
  );
}

render(() => <App />, document.body);