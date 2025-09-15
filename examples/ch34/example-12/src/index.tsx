import { Route, Router, RouteSectionProps, useParams } from '@solidjs/router';
import { render } from 'solid-js/web';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><a href="/about">/about</a></li>
        <li><a href="/blog">/blog</a></li>
        <li><a href="/some/other/path">/some/other/path</a></li>
      </ul>
    </div>
  );
};

const About = () => {
  return (
    <h1>About</h1>
  );
};

const NotFound = (props: RouteSectionProps) => {
  const unmatched = props.params["unmatched"];
  console.log(unmatched);
  return (
    <main>
      <h1>404: Not Found</h1>
      <div>Unmatched path: <code>{unmatched}</code></div>
    </main>
  )
};

const App = () => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*unmatched" component={NotFound} />
  </Router>
);

render(() => <App />, document.body);