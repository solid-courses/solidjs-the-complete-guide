import { createContext, useContext, type Component } from 'solid-js';
import { render } from 'solid-js/web';

interface Theme {
  color: string;
  background: string;
  border: string;
}

const ThemeContext = createContext<Theme>({
  color: '#fff',
  background: '#000',
  border: '#fff'
});

const ThemedCard: Component<{
  title: string;
  children: string
}> = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <section
      style={{
        color: theme.color,
        'background-color': theme.background,
        border: `2px solid ${theme.border}`,
        padding: '1rem',
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </section>
  );
};

const App: Component = () => {
  return (
    <main style={{
      gap: '1rem',
      display: 'flex',
      'flex-direction': 'column',
    }}>
      <ThemedCard title="Default Theme">
        This section uses the default theme defined by the context.
      </ThemedCard>

      <ThemeContext.Provider
        value={{
          color: '#fff',
          background: '#e63946',
          border: '#ffffff'
        }}
      >
        <ThemedCard title="Red Theme">
          This section overrides the theme using a red palette.
        </ThemedCard>

        <ThemeContext.Provider
          value={{
            color: '#fff',
            background: '#1d3557',
            border: '#f1faee'
          }}
        >
          <ThemedCard title="Blue Theme">
            This nested section overrides the red theme with a blue one.
          </ThemedCard>
        </ThemeContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
};

render(() => <App />, document.body);
