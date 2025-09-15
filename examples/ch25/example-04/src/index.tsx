import {
  Match,
  Switch,
  createResource
} from 'solid-js';
import { render } from 'solid-js/web';

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

export const App = () => {
  const [resource, actions] = createResource<User>(fetchUser);

  return (
    <main>
      <Switch>
        <Match when={resource.state === 'pending'}>
          <div>Fetching...</div>
        </Match>
        <Match when={resource.state === 'errored'}>
          <div>Error Occurred: {resource.error}</div>
        </Match>
        <Match when={resource.state === 'ready'}>
          <div>UserName: {resource()!.name}</div>
          <div>Age: {resource()!.age}</div>
        </Match>
      </Switch>
    </main>
  );
};

render(() => <App />, document.body);