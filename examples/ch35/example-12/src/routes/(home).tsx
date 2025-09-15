import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome to the Blog</h1>
      <p>This example demonstrates using server functions for fetching data.</p>
      <p>
        You can check out the following examples:
      </p>
      <ul>
        <li><A href="posts">View All Posts</A></li>
        <li><A href="posts/1">View Post with ID 1</A></li>
        <li><A href="posts/edit/1">Update Post with ID 1</A></li>
      </ul>
    </main>
  );
}
