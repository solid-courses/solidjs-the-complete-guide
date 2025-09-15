import { type Component, createSignal, type JSX } from 'solid-js';
import { render } from 'solid-js/web';

type EventHandler = JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent>;

const ThemedHeader: Component = () => {
  const saved = localStorage.getItem('theme-color');
  return (
    <h1
      class="page-title"
      ref={(el) => {
        el.style.color = saved ?? '#1a1a1a';
      }}
    >
      Welcome Back
    </h1>
  );
};

const ColorPicker: Component = () => {
  const saved = localStorage.getItem('theme-color');

  const [color, setColor] = createSignal(saved ?? '#1a1a1a');

  const updateColor: EventHandler = (event) => {
    const newColor = event.target!.value;
    setColor(newColor);
    localStorage.setItem('theme-color', newColor);
  };

  return (
    <div>
      <label for="color">
        Pick a theme color:
      </label>
      <input
        id="color"
        type="color"
        value={color()}
        onInput={updateColor}
      />
    </div>
  );
};

const Instructions = () => {
  return (
    <p>
      Use the color picker below to customize the heading color,
      then refresh the page. Your selection is saved and will be
      applied the next time the component is rendered.
    </p>
  );
}

const App: Component = () => {
  return (
    <main>
      <ThemedHeader />
      <Instructions />
      <ColorPicker />
    </main>
  );
};

render(() => <App />, document.body);
