import { Route, Router, useNavigate, usePreloadRoute } from "@solidjs/router";
import { lazy } from "solid-js";
import { render } from "solid-js/web";

const About = lazy(() => import('./About'));

function AboutLink() {
  const preload = usePreloadRoute();
  const navigate = useNavigate();

  return (
    <a
      onMouseOver={() => preload("/about", { preloadData: true })}
      onClick={() => navigate("/about")}
    >
      Go to about
    </a>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <AboutLink />
      </nav>
    </div>
  );
};

function App() {
  return (
    <Router preload={false}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

render(() => <App />, document.body);