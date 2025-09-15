import { type Component } from "solid-js";

const Home: Component<{}> = () => {
  return (
    <div>
      <nav><a href="/about">About</a></nav>
      <h1>Home</h1>
      <p>Welcome to the homepage of our app. Explore and enjoy!</p>
    </div>
  )
};

export default Home;