import { Route, Router } from '@solidjs/router';
import { render } from 'solid-js/web';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
  )
};

const About = () => {
  return (
    <h1>About</h1>
  )
};

const NotFound = () => {
  return (
    <h1>404: Not Found</h1>
  )
};

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

render(() => <App />, document.body);