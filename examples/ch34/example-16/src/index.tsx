import { Route, RouteSectionProps, Router } from "@solidjs/router";
import { Component } from "solid-js";
import { render } from "solid-js/web";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the homepage of our app. Explore and enjoy!</p>
    </div>
  )
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Learn more about our company and the team behind it.</p>
    </div>
  )
};

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <main>
      <header>
        <nav style={{ display: 'flex', gap: '1em' }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
      {props.children}
      <footer>Contact us at support@example.com</footer>
    </main>
  );
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