import { render } from 'solid-js/web';

const List = () => {
  const items = ['Red', 'Green', 'Blue'];
  return (
    <main>
      {(items.length > 0) && (
        <ul>{items.map((item) => <li>{item}</li>)}</ul>
      )}
    </main>
  );
};

render(() => <List />, document.body);