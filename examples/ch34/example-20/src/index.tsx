import { Route, RouteSectionProps, Router, useParams } from "@solidjs/router";
import { Component } from "solid-js";
import { render } from "solid-js/web";

const posts = [
  {
    id: 1,
    title: "Understanding SolidJS",
    content: "SolidJS is a reactive UI library...",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Why Choose SolidJS?",
    content: "SolidJS offers unparalleled reactivity...",
    author: "John Doe"
  },
  {
    id: 3,
    title: "Getting Started with SolidJS",
    content: "To start with SolidJS, first install...",
    author: "John Doe"
  },
];

const Home = () => {
  return (
    <main>
      <h1>Welcome to the SolidJS Blog</h1>
      <p>This blog shares insights, tips, and tutorials to help you
        master SolidJS and build modern, reactive web applications.</p>
      <section>
        <h2>Getting Started</h2>
        <ul>
          <li>Head over to the <a href="/posts">Posts page</a> to view all published articles.</li>
          <li>Click on any post title to read the full article and learn more about the topic.</li>
          <li>Come back regularly to explore new content as it's added.</li>
        </ul>
      </section>
    </main>
  );
};

const BlogLayout: Component<RouteSectionProps> = (props) => (
  <div>
    <header>
      <h1>My Blog</h1>
      <nav>
        <a href="/posts">Posts</a>
      </nav>
    </header>
    <main>{props.children}</main>
  </div>
);

const Posts: Component<RouteSectionProps> = () => (
  <div>
    <h2>All Posts</h2>
    <ul>
      {posts.map((post) => (
        <li>
          <a href={`/posts/${post.id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

const PostDetails: Component<RouteSectionProps> = (props) => {
  const post = posts.find((post) => {
    return post.id === parseInt(props.params.id)
  });

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
};

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <div>
      <header>
        <a href="/">Home</a> | <a>Login</a> | <a>Search</a>
      </header>
      {props.children}
      <footer><hr />Contact us at support@example.com</footer>
    </div>
  );
}

function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/posts" component={BlogLayout}>
        <Route path="/" component={Posts} />
        <Route path="/:id" component={PostDetails} />
      </Route>
    </Router>
  );
}

render(() => <App />, document.body);