import { render } from 'solid-js/web'

type User = {
  name: string;
  age: number;
}

function printUserInfo(user: User) {
  return user.name + ' ' + user.age;
}

const Component = () => {
  const user: User = { name: 'John Doe', age: 20 };

  return (
    <div>
      <div>{1 + 1} {'Hello World'}</div>
      <div>{printUserInfo(user)}</div>
    </div>
  );
};

render(Component, document.body);