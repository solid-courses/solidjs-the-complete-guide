import { Route, Router, RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { render } from "solid-js/web";

const Home: Component<RouteSectionProps> = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><a href="/about">/about</a></li>
        <li><a href="/posts/2024/12/15">/posts/2024/12/15</a></li>
      </ul>
    </div>
  )
};

const About: Component<RouteSectionProps> = () => {
  return (
    <h1>About</h1>
  )
};

const NotFound: Component<RouteSectionProps> = () => {
  return (
    <h1>404: Not Found</h1>
  )
};

const Posts: Component<RouteSectionProps> = (props) => {
  const date = props.params["date"];
  // Fetch posts based on the date parameter
  // Example: Fetch posts for the specific date (2024/12/15)
  // or fetch all posts if no date is provided.
  return (
    <div>
      <h1>Posts</h1>
      <p>Showing posts for: {date || "All Dates"}</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="posts/*date" component={Posts} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}


render(() => <App />, document.body);