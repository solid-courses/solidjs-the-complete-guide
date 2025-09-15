import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { lazy } from "solid-js";

const routes = [
  {
    path: "/",
    component: lazy(() => import('./Home')),
  },
  {
    path: "/about",
    component: lazy(() => import('./About')),
  },
];

function App() {
  return (
    <Router preload={false}>{routes}</Router>
  );
}

render(() => <App />, document.body);