import { createAsync, Route, Router } from "@solidjs/router";
import { Component, Show, Suspense, createResource } from "solid-js";
import { render } from "solid-js/web";

type User = { name: string, mail: string };

function fetchUserProfile(): Promise<User> {
  console.log('Fetching user profile...');
  return new Promise(resolve => {
    setTimeout(() => resolve({
      name: 'John Doe', mail: 'john@example.com'
    }), 3000);
  });
}

const cache: Map<string, User> = new Map();

const getUser = async () => {
  if (cache.has("user")) return cache.get('user');
  const user = await fetchUserProfile();
  cache.set('user', user);
  return user;
};

const Profile: Component<{}> = () => {
  const user = createAsync(getUser);
  return (
    <div>
      <h1>User Profile</h1>
      <Show when={user()}>
        <div>{user()!.name}</div>
        <div>{user()!.mail}</div>
      </Show>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <a href="/profile">Profile</a>
      </nav>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} preload={() => getUser()} />
    </Router>
  );
}

render(() => <App />, document.body);