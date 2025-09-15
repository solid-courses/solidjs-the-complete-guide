import { Route, Router, useParams } from "@solidjs/router";
import { render } from "solid-js/web";

function User() {
  const params = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {params.id}</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><a href="/user/1">User 1</a></li>
        <li><a href="/user/42">User 42</a></li>
        <li><a href="/user/99">User 99</a></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/user/:id" component={User} />
    </Router>
  );
}

render(() => <App />, document.body);