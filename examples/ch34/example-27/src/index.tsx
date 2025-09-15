import {
  createAsync,
  query,
  Route,
  RoutePreloadFunc,
  Router,
  RouteSectionProps
} from "@solidjs/router";
import { Component, Show, Suspense } from "solid-js";
import { render } from "solid-js/web";

type User = { id: string, name: string, mail: string };

function fetchUserData(id: string): Promise<User> {
  console.log('Fetching user profile...');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id,
        name: 'John Doe',
        mail: 'john@example.com'
      })
    }, 300);
  });
}

const queryUserData = query(fetchUserData, 'user');

const Profile: Component<RouteSectionProps> = (props) => {
  console.log(props.data); // Data comes from preload function

  const id = props.params.id;
  const user = createAsync(() => queryUserData(id));

  return (
    <div>
      <h1>User Profile</h1>
      <Suspense fallback={<div>Loading</div>}>
        <Show when={user()}>
          <div>ID: {user()!.id}</div>
          <div>Name: {user()!.name}</div>
          <div>Mail: {user()!.mail}</div>
        </Show>
      </Suspense>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <a href="/profile/12">/profile/12</a>
      </nav>
    </div>
  );
};

const preloadUser: RoutePreloadFunc = async (args) => {
  const id = args.params.id;
  return await queryUserData(id);
};

function App() {
  return (
    <Router preload={true}>
      <Route path="/" component={Home} />
      <Route path="/profile/:id" component={Profile} preload={preloadUser} />
    </Router>
  );
}

render(() => <App />, document.body);