import { HashRouter, Route } from "@solidjs/router";
import { render } from "solid-js/web";

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
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

render(() => <App />, document.body);