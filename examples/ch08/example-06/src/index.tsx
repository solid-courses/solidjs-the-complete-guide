import { render } from 'solid-js/web'

const Component = () => {
  const arr = ['one', 'two', 'three'];
  return (
    <ul>
      {arr.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

render(Component, document.body);