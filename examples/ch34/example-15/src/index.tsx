import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav><a href="/about">About</a></nav>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <nav><a href="/">Home</a></nav>
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