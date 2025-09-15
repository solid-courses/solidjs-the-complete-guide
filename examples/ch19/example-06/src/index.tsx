import { Show, createSignal } from 'solid-js';
import { render } from 'solid-js/web';

type User = { name: string; age: number }

export const App = () => {
  const [users, setUsers] = createSignal<Array<User>>([
    { name: 'John Doe', age: 20 },
    { name: 'Jenny Doe', age: 21 },
  ]);

  const mutateItem = () => {
    setUsers(val => val.map((el, i) => {
      if (i === 0) el.age += 1;
      return el;
    }));
  };

  const replaceItem = () => {
    setUsers(val => val.map((el, i) => {
      if (i === 1) return { ...el, age: el.age + 1 };
      return el;
    }));
  };

  return (
    <div>
      <div>
        <button onClick={mutateItem}>Mutate Item One</button>
        {` `}
        <button onClick={replaceItem}>Replace Item Two</button>
      </div>
      <Show when={users()[0]} keyed>
        <div>{users()[0].name} {users()[0].age} {Date.now()}</div>
      </Show>
      <Show when={users()[1]} keyed>
        <div>{users()[1].name} {users()[1].age} {Date.now()}</div>
      </Show>
    </div>
  );
};

render(() => <App />, document.body);