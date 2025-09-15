import { Route, Router, RouteSectionProps, useMatch } from "@solidjs/router";
import { Component, createMemo, For } from "solid-js";
import { render } from "solid-js/web";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the homepage of our app. Explore and enjoy!</p>
    </div>
  )
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Learn more about our company and the team behind it.</p>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Read the latest news about our company.</p>
    </div>
  )
};

const Layout: Component<RouteSectionProps> = (props) => {
  const menu = [
    { path: '/', name: 'Home', href: '/' },
    { path: '/about/*', name: 'About', href: '/about' },
    { path: '/blog/*', name: 'Blog', href: '/blog' }
  ];

  const menuWithActiveFlag = createMemo(() => {
    return menu.map((item) => {
      const isActive = useMatch(() => item.path, { end: true });
      return { ...item, active: isActive() };
    });
  });

  return (
    <main>
      <header>
        <nav style={{ display: 'flex', gap: '1em' }}>
          <For each={menuWithActiveFlag()}>
            {item => {
              if (item.active) return <span>{item.name}</span>;
              return <a href={item.href}>{item.name}</a>;
            }}
          </For>
        </nav>
      </header>
      {props.children}
      <footer>Contact us at support@example.com</footer>
    </main>
  );
}

function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
    </Router>
  );
}

render(() => <App />, document.body);