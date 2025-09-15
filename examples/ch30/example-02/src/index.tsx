import { render } from 'solid-js/web';

export const App = () => { 
  let el: HTMLButtonElement = document.createElement('button');
  el.innerText = 'Click Here';

  const handler = (event: MouseEvent) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
  }

  document.addEventListener('click', handler);

  return (
    <div>{el}</div>
  );
}

render(() => <App />, document.body);