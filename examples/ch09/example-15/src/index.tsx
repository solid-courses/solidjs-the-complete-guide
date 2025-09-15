import { type Component, createMemo, createSignal, type JSXElement } from 'solid-js';
import { render } from 'solid-js/web';

const User: Component<{ onClick: () => void }> = (props) => {
  return (
    <div>
      <h2>Welcome back!</h2>
      <div><button onClick={props.onClick}>Sign out</button></div>
    </div>
  );
}

const Anonymous: Component<{ onClick: () => void }> = (props) => {
  return (
    <div>
      <h2>Please Sign in!</h2>
      <div><button onClick={props.onClick}>Sign in</button></div>
    </div>
  );
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn() && <User onClick={handleLogout} />}
      {!isLoggedIn() && <Anonymous onClick={handleLogin} />}
    </div>
  );
};

render(() => <App />, document.body);