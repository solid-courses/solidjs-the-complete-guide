import { render } from 'solid-js/web'

const Component = () => {
  return (
    <div>
      <div>
        {String(true)} {String(null)} {String(undefined)}
      </div>
      <div>{true ? 'Yes' : 'No'}</div>
    </div>
  );
};

render(Component, document.body);