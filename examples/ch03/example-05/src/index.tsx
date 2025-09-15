import { render } from "solid-js/web";

function Greeting(props) {
  return <h1>Hello, {props.name}! You are {props.age} years old!</h1>;
}

const App = () => {
  return <Greeting name="John Doe" age={25} />
};

render(() => <App />, document.getElementById('root')!);