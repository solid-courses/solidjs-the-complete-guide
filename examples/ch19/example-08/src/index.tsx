import { createSignal, Match, Switch } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [role, setRole] = createSignal('admin');

  return (
    <main>
      <h1>Dashboard</h1>
      <Switch fallback={<p>Unknown role. Access denied.</p>}>
        <Match when={role() === 'admin'}>
          <p>Welcome, Admin! You have full access.</p>
        </Match>
        <Match when={role() === 'editor'}>
          <p>Welcome, Editor! You can modify content.</p>
        </Match>
        <Match when={role() === 'viewer'}>
          <p>Welcome, Viewer! You have read-only access.</p>
        </Match>
      </Switch>
      <div style={{ display: 'flex', gap: '0.5em'}}>
        <button onClick={() => setRole('admin')}>Make Admin</button>
        <button onClick={() => setRole('editor')}>Make Editor</button>
        <button onClick={() => setRole('viewer')}>Make Viewer</button>
        <button onClick={() => setRole('unknown')}>Make Unknown</button>
      </div>
    </main>
  );
};

render(() => <App />, document.body);