import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome to the Blog</h1>
      <p>This example demonstrates using custom API endpoins for fetching component data.</p>
      <p>
        We use <code>useServer</code> to get the list of posts from the source
        on the server-side and use the fetch API on the client side.</p>
      <p>
        You can check out the following examples:
      </p>
      <ul>
        <li><A href="/posts">View All Posts</A></li>
        <li><A href="/posts/1">Post with ID 1</A></li>
      </ul>
      <h2>About API Endpoints:</h2>
      <p>- The <code>/api/posts</code> endpoint is used to fetch all posts. </p>
      <p>- The <code>/api/post/:id</code> endpoint is used to fetch individual posts. </p>
    </main>
  );
}
