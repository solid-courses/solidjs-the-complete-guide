import { type Component, createSignal, type JSX, type Setter } from "solid-js";
import { render } from "solid-js/web";

type Player = { name: string; age: number; }

type Handler = JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent>;

const Display: Component<{ player: Player }> = (props) => {
  return (
    <section>
      <h2>Display Player</h2>
      <div>Name: {props.player.name}</div>
      <div>Age: {props.player.age}</div>
    </section>
  );
};

const Edit: Component<{
  player: Player,
  setPlayer: Setter<Player>
}> = (props) => {

  const handleNameChange: Handler = (event) => {
    const name = event.currentTarget.value;
    props.setPlayer(player => ({ ...player, name }));
  };

  const handleAgeChange: Handler = (event) => {
    const age = Number(event.currentTarget.value);
    props.setPlayer(player => ({ ...player, age }));
  };

  return (
    <section>
      <h2>Edit Player</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={props.player.name}
          onInput={handleNameChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          value={props.player.age}
          onInput={handleAgeChange}
        />
      </div>
    </section>
  );
}

const App = () => {
  const [player, setPlayer] = createSignal<Player>({
    name: 'John Doe',
    age: 30
  });

  return (
    <main>
      <Display player={player()} />
      <Edit player={player()} setPlayer={setPlayer} />
    </main>
  )
}


render(() => <App />, document.body);