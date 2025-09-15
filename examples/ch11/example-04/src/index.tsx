import { render } from "solid-js/web";
import { createContext, useContext, type Component, type JSX } from "solid-js";

const translations: Record<string, { greeting: string }> = {
  en: { greeting: "Hello" },
  fr: { greeting: "Bonjour" },
  es: { greeting: "Hola" }
};

const LocaleContext = createContext<string>("en");

const Greeting: Component = () => {
  const locale = useContext(LocaleContext);
  console.log("Greeting rendered with locale:", locale);
  return <p>{translations[locale].greeting}, world!</p>;
};

const French: Component<{ children: JSX.Element }> = (props) => {
  return (
    <LocaleContext.Provider value="fr">
      {props.children}
    </LocaleContext.Provider>
  );
};

const Spanish: Component<{ children: JSX.Element }> = ({ children }) => {
  return (
    <LocaleContext.Provider value="es">
      {children}
    </LocaleContext.Provider>
  );
};

const App: Component = () => {
  return (
    <main>
      <h2>Correct Locale Context</h2>

      <French>
        <Greeting />
      </French>

      <h2>Broken Locale Context</h2>
      <Spanish>
        <Greeting />
      </Spanish>
    </main>
  );
};

render(() => <App />, document.body);
