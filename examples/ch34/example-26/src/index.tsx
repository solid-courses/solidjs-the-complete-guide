import { A, Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <A href="/about">About</A>
    </nav>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
    <nav>
      <A href="/">Home</A>
    </nav>
  </div>
);

function App() {
  return (
    <Router base="/my-app">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

render(() => <App />, document.body);