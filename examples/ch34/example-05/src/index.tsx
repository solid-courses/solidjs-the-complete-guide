import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const About = lazy(() => import('./About'));

const Home = lazy(() => import('./Home'));

function App() {
  return (
    <Router preload={false}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

render(() => <App />, document.body);
