import { Route, Router, RouteSectionProps, useParams } from '@solidjs/router';
import { Component } from 'solid-js';
import { render } from 'solid-js/web';

const User: Component<RouteSectionProps> = (props) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {props.params.id}</p>
      <UserID />
    </div>
  );
};

const UserID: Component<{}> = () => {
  const params = useParams();
  return (
    <section>
      <h2>Child Component</h2>
      <p>User ID: {params.id}</p>
    </section>
  )
};

const Home: Component<RouteSectionProps> = () => (
  <div>
    <h1>Home</h1>
    <ul>
      <li><a href="/user/1">Go to User 1</a></li>
      <li><a href="/user/2">Go to User 2</a></li>
    </ul>
  </div>
);

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/user/:id" component={User} />
    </Router>
  );
}

render(() => <App />, document.body);