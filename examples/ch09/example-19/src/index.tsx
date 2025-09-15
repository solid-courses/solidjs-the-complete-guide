import { Component } from "solid-js";
import { render } from "solid-js/web";

type Player = {
  name: string;
  age: number;
}

const Player: Component<{ player: Player }> = (props) => {
  return (
    <div>Age: {props.player.age}</div>
  );
}

const Canvas: Component<{ player: Player }> = (props) => {
  props.player.age = 40;
  return (
    <div>Render player: {props.player.age}</div>
  );
}

const App = () => {
  let player: Player = { name: 'John Doe', age: 30 };

  return (
    <div>
      <Player player={player} />
      <Canvas player={player} />
    </div>
  )
}

render(() => <App />, document.body);