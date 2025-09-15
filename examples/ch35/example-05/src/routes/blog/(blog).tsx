import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Blog() {
  return (
    <main>
      <Title>Blog</Title>
      <h1>Blog Overview</h1>
      <p>Welcome to our blog. Explore recent articles:</p>
      <ul>
        <li><A href="/blog/article-1">Article 1</A></li>
        <li><A href="/blog/article-2">Article 2</A></li>
      </ul>
    </main>
  );
}