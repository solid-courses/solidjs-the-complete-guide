import { Route, Router, RouteSectionProps, useParams } from '@solidjs/router';
import { JSX } from 'solid-js';
import { render } from 'solid-js/web';

function Profile(props: RouteSectionProps): JSX.Element {
  return (
    <main>
      <h1>User Profile</h1>
      <div>User ID: {props.params.id}</div>
    </main>
  );
}

function Settings(props: RouteSectionProps): JSX.Element {
  return (
    <main>
      <h1>Settings</h1>
      <div>Settings for User ID: {props.params.id}</div>
    </main>
  )
}

function Home(props: RouteSectionProps): JSX.Element {
  return (
    <ul>
      <li><a href="/user/1">/user/1</a></li>
      <li><a href="/user/2">/user/2</a></li>
      <li><a href="/user/1/settings">/user/1/settings</a></li>
      <li><a href="/user/2/settings">/user/2/settings</a></li>
    </ul>
  )
}

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/user/:id?" component={Profile} />
      <Route path="/user/:id?/settings" component={Settings} />
    </Router>
  );
}

render(() => <App />, document.body);