import { render } from "solid-js/web";

const Heading = ()  => <h1>Hello World!</h1>;
const Message = ()  => <p>Here is a message for you.</p>;

const App = () => {
  return (
    <div>
      <Heading />
      <Message />
    </div>
  );
}

render(() => <App />, document.getElementById('root')!);