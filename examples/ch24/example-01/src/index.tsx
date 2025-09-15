import { Match, Switch, createSignal, type Component } from 'solid-js';
import { render } from 'solid-js/web';

interface User {
  name: string;
  age: number;
}

const DisplayUser: Component<{}> = (props) => {
  interface State<Data = any, Error = any> {
    status: 'pending' | 'success' | 'error';
    data: Data | undefined;
    error: Error | undefined;
  }

  const [state, setState] = createSignal<State<User, string>>({
    status: 'pending',
    data: undefined,
    error: undefined,
  });

  function getData() {
    fetch('/user.json')
      // 404 does not constitute a network error
      // response.ok means that the status is in the range 200-299 inclusive
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject({
            code: response.status,
            message: response.statusText,
          }),
      )
      .then((data: User) => {
        setState({ status: 'success', data, error: undefined });
      })
      .catch((err: Error) => {
        setState({ status: 'error', data: undefined, error: err.message });
      });
  }

  getData();

  return (
    <Switch>
      <Match when={state().status === 'pending'}>
        <div>Fetching...</div>
      </Match>
      <Match when={state().status === 'error'}>
        <div>Error Occured: {state().error}</div>
        <button onclick={getData}>Click to retry!</button>
      </Match>
      <Match when={state().status === 'success'}>
        <div>UserName: {state().data!.name}</div>
        <div>Age: {state().data!.age}</div>
      </Match>
    </Switch>
  );
};

export const App = () => {
  return (
    <div>
      <DisplayUser />
    </div>
  );
};

render(() => <App />, document.body);