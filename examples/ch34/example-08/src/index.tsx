import { MatchFilters, Route, Router, RouteSectionProps, useParams } from "@solidjs/router";
import { JSX } from "solid-js";
import { render } from "solid-js/web";

function User(props: RouteSectionProps): JSX.Element {
  return <div>User ID: {props.params.id}</div>;
}

function NotFound(): JSX.Element {
  return (
    <div>404 Not Found</div>
  )
}

function Home(props: RouteSectionProps): JSX.Element {
  return (
    <ul>
      <li><a href="/user/1">User 1</a></li>
      <li><a href="/user/two">User two</a></li>
    </ul>
  );
}

export default function App() {
  const filters: MatchFilters = {
    id: /^\d+$/, // Match only numeric values
  };

  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/user/:id" matchFilters={filters} component={User} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

render(() => <App />, document.body);