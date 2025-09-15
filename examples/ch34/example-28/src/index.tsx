import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const About = lazy(() => import('./About'));

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <a href="/about">About</a>
      </nav>
    </div>
  );
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