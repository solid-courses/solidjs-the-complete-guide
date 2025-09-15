import { A, Route, RouteSectionProps, Router } from "@solidjs/router";
import { Component, lazy } from "solid-js";
import { render } from "solid-js/web";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Blog = lazy(() => import("./Blog"));

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '0.5em' }}>
        <A href='/'>Home</A>
        <A href='/blog'>Blog</A>
        <A href='/about'>About</A>
      </nav>
      {props.children}
    </div>
  );
};

const App = () => (
  <Router root={Layout}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
  </Router>
);

render(App, document.body);