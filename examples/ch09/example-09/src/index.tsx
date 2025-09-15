import { type Component, type JSX } from 'solid-js';
import { render } from 'solid-js/web';

const LogPanel: Component<{
  title: string;
  children?: JSX.Element
}> = (props) => {
  return (
    <section>
      <h3>{props.title}</h3>
      {props.children === undefined
        ? <p>No logs to display.</p>
        : Array.isArray(props.children)
          ? props.children.map((log) => <div>{log}</div>)
          : <div>{props.children}</div>}
    </section>
  );
};

const App = () => {
  return (
    <main>
      <LogPanel title="System Logs" />

      <LogPanel title="User Activity">
        <p>User logged in.</p>
      </LogPanel>

      <LogPanel title="Audit Trail">
        <p>Account created.</p>
        <p>Profile updated.</p>
        <p>Logged out.</p>
      </LogPanel>
    </main>
  );
};

render(() => <App />, document.body);
