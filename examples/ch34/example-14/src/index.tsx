import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { Component, Show, createMemo, onMount } from "solid-js";
import { render } from "solid-js/web";

const Auth: Component<RouteSectionProps> = (props) => {
  const isRegister = createMemo(() => {
    return props.location.pathname === '/register'
  });

  onMount(() => console.log('Mounting the Auth component!'));

  return (
    <div>
      <h1>{isRegister() ? "Register" : "Login"}</h1>
      <form>
        <Show when={isRegister()}>
          <div>
            <label>Username:<input type="text" /></label>
          </div>
        </Show>

        <div>
          <label>Email:<input type="email" /></label>
        </div>

        <div>
          <label>Password:<input type="password" /></label>
        </div>

        <div>
          <button type="submit">{isRegister() ? "Sign Up" : "Log In"}</button>
        </div>

        <Show
          when={isRegister()}
          fallback={(
            <div>Not registered? Go to <a href="/register">register</a>.</div>
          )}
        >
          <div>Already registered. Go to <a href="/login">login</a>.</div>
        </Show>
      </form>
    </div>
  );
}

const Home: Component<RouteSectionProps> = () =>  {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Please <a href="/login">login</a> or
         <a href="/register">register</a>.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path={["/login", "/register"]} component={Auth} />
    </Router>
  );
}

render(() => <App />, document.body);