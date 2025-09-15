import { createEffect, createMemo, createSignal } from "solid-js";
import { render } from "solid-js/web";

export const App = () => {
  const [preferences, setPreferences] = createSignal({
    lang: "en",
    theme: "light",
    fontSize: "large",
  });

  const theme = createMemo(() => preferences().theme, "default", {
    equals: (_prev, next) => {
      return !["dark", "light", "system"].includes(next);
    },
  });

  createEffect(() => console.log(`Theme is set to ${theme()}`));

  const handleClick = (theme: string) => {
    setPreferences((state) => ({ ...state, theme }));
  };

  return (
    <div>
      <div>Current theme: {theme()}</div>
      <div>
        <button onClick={[handleClick, "dark"]}>Dark</button>
        <button onClick={[handleClick, "light"]}>Light</button>
        <button onClick={[handleClick, "system"]}>System</button>
        <button onClick={[handleClick, "soft"]}>Soft</button>
      </div>
    </div>
  );
};

render(() => <App />, document.body);
