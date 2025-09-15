import { render} from 'solid-js/web'

const Greeting = () => {
  return (
    <section>
      <h1>My Title</h1>
      <p>Some content.</p>
    </section>
  );
};

render(Greeting, document.body);