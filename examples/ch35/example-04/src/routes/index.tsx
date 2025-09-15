import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome</h1>
      <p>This demo shows how to use catch-all routes in SolidStart.</p>
      <p>
        Explore <A href="/posts">Posts</A> or try nested paths like <A href="/posts/2024/12/15">/posts/2024/12/15</A>.
      </p>
    </main>
  );
}
