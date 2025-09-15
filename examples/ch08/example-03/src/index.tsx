import { render} from 'solid-js/web'

const Greeting = () => {
  return (
    <>
      <h1>My Title</h1>
      <p>Some content.</p>
    </>
  );
};

render(Greeting, document.body);