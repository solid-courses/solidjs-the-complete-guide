
import {
  createSignal,
  Match,
  Switch,
  type Accessor,
  type Component
} from 'solid-js';
import { render } from 'solid-js/web';

interface State<Data = any, Error = any> {
  status: 'pending' | 'success' | 'error';
  data: Data | undefined;
  error: Error | undefined;
}

function createResource<Data = any, Error = any, Params = any>(
  fetcher: (params: Params) => Promise<Data>,
  queryParams: Params,
): Accessor<State<Data, Error>> {
  const [state, setState] = createSignal<State<Data, Error>>({
    status: 'pending',
    data: undefined,
    error: undefined,
  });

  fetcher(queryParams)
    .then((data: Data) => {
      setState({ status: 'success', data, error: undefined });
    })
    .catch((error: Error) => {
      setState({ status: 'error', data: undefined, error });
    });

  return state;
}

interface User {
  name: string;
  age: number;
}

function fetchUser() {
  return new Promise<User>((resolve, reject) => {
    fetch('/src/user.json')
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject({
            code: response.status,
            message: response.statusText,
          }),
      )
      .then((data: User) => {
        resolve(data);
      })
      .catch((err: Error) => {
        reject(err.message);
      });
  });
}

const DisplayUser: Component<{
  state: Accessor<State<User, string>>;
}> = ({ state }) => {
  return (
    <Switch>
      <Match when={state().status === 'pending'}>
        <div>Fetching...</div>
      </Match>
      <Match when={state().status === 'error'}>
        <div>Error Occured: {state().error}</div>
      </Match>
      <Match when={state().status === 'success'}>
        <div>UserName: {state().data!.name}</div>
        <div>Age: {state().data!.age}</div>
      </Match>
    </Switch>
  );
};

export const App = () => {
  const state = createResource<User, string, undefined>(
    fetchUser,
    undefined
  );

  return (
    <div>
      <DisplayUser state={state} />
    </div>
  );
};

render(() => <App />, document.body);