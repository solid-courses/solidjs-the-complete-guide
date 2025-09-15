import { A, Router, RouteSectionProps, useMatch } from "@solidjs/router";
import { Component, createMemo, For } from "solid-js";
import { render } from "solid-js/web";
import { posts } from "./posts";

const Home: Component = () => (
  <main>
    <h1>Welcome to the SolidJS Blog</h1>
    <p>
      This application demonstrates how to use `useMatch` to filter and
      style content. The list of posts below is rendered at
      <code>/posts</code>, and each post’s detail page is displayed at
      <code>/posts/:id</code>, all under a shared layout.
    </p>
    <section>
      <h2>Getting Started</h2>
      <ul>
        <li>Visit the <strong>Posts</strong> section to explore articles.</li>
        <li>Click on any post title to read the content.</li>
      </ul>
    </section>
  </main>
);

const BlogLayout: Component<RouteSectionProps> = (props) => {
  const isMatched = useMatch(() => '/posts/:id');
  return (
    <div>
      <header>
        <h1>My Blog</h1>
        {isMatched() ? (
          <nav>
            <A href="/posts">All Posts</A>
          </nav>
        ) : (
          <div>
            <h2>Browse by Category</h2>
            <ul>
              <li><A href="/posts?category=solidjs">SolidJS Tutorials</A></li>
              <li><A href="/posts?category=performance">Performance Tips</A></li>
              <li><A href="/posts?category=case-studies">Case Studies</A></li>
            </ul>
            <h2>Featured Post</h2>
            <PostLinks featureds={true} />
          </div>
        )}
      </header>
      <main>{props.children}</main>
    </div>
  )
};

const PostLinks: Component<{ featureds: boolean }> = (props) => {
  const filtered = createMemo(() => {
    return props.featureds ? posts.filter(p => p.featured) : posts;
  });
  return (
    <ul>
      <For each={filtered()}>
        {post => (
          <li>
            <A href={String(post.id)}>{post.title}</A>
          </li>
        )}
      </For>
    </ul>
  );
}

const Posts: Component<RouteSectionProps> = (props) => (
  <div>
    <h2>All Posts</h2>
    <PostLinks featureds={false} />
  </div>
);

const PostDetails: Component<RouteSectionProps> = (props) => {
  const post = posts.find((p) => p.id === parseInt(props.params.id));

  if (!post) return <p>Post not found.</p>;

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
    </article>
  );
};

const About: Component<RouteSectionProps> = (props) => {
  return (
    <div>
      <p>
        In this demo, the navigation bar changes based on whether you are
        viewing the main posts page or an individual post. This is a common
        pattern in real-world applications where different views require
        slightly different navigation options.
      </p>
    </div>
  );
}

const NotFound: Component<RouteSectionProps> = (props) => {
  return (
    <div>404 Not Found</div>
  );
}

const routes = [
  {
    path: "/",
    info: { label: "Home", href: "/" },
    component: Home
  },
  {
    path: "/posts",
    info: { label: "Posts", href: "/posts" },
    component: BlogLayout,
    children: [
      { path: "/", component: Posts },
      { path: "/:id", component: PostDetails }
    ]
  },
  {
    path: "/about",
    info: { label: "About", href: "/about" },
    component: About
  },
  {
    path: "*",
    info: { label: "404", href: "/" },
    component: NotFound
  },
];

const Layout: Component<RouteSectionProps> = (props) => {
  const filteredRoutes = createMemo(() => {
    return routes.filter(item => item.path !== '*')
  });;

  return (
    <div>
      <nav style={{ display: "flex", gap: "0.75rem", "margin-bottom": "1em" }}>
        <For each={filteredRoutes()}>
          {(route) => {
            const isMatched = useMatch(() => route.path);
            return (
              <A
                href={route.info.href}
                style={{
                  color: isMatched() ? "black" : "blue",
                  "pointer-events": isMatched() ? "none" : "auto",
                  "text-decoration": isMatched() ? "none" : "underline",
                }}
              >
                {route.info.label}
              </A>
            );
          }}
        </For>
      </nav>
      {props.children}
    </div>
  );
};

function App() {
  return (
    <Router root={Layout}>{routes}</Router>
  );
}

render(() => <App />, document.body);
