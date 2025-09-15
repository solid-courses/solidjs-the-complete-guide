import {
  createAsync,
  query,
  Route,
  Router
} from "@solidjs/router";
import { Component, Show, Suspense } from "solid-js";
import { render } from "solid-js/web";

type User = { id: number, name: string, mail: string };

function fetchUserProfile(id: number): Promise<User> {
  console.log(`Fetching user profile for ${id}`);
  return new Promise(resolve => {
    setTimeout(() => resolve({
      id,
      name: 'John Doe',
      mail: 'john@example.com'
    }), Math.random() * 1000);
  });
}

const queryUser = query(fetchUserProfile, 'user');

const User: Component<{ id: number }> = (props) => {
  const user = createAsync(() => queryUser(props.id));
  return (
    <div>
      <h1>User Profile</h1>
      <Suspense fallback={<div>Loading</div>}>
        <Show when={user()}>
          <div>UserID: {user()!.id}</div>
          <div>User Name: {user()!.name}</div>
          <div>User Email: {user()!.mail}</div>
        </Show>
      </Suspense>
    </div>
  );
}

const Home: Component = () => (
  <div>
    <h1>Request Deduplication</h1>
    <p>The following components fetch user data using a deduplicated query.</p>
    <p>Check the browser console to see how many fetches occur.</p>
    <User id={44} />
    <User id={44} />
    <User id={22} />
  </div>
);

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

render(() => <App />, document.body);