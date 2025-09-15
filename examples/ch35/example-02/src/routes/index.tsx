import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome</h1>
      <p>This is a demo of dynamic route parameters in SolidStart.</p>
      <p>
        Visit the <A href="/posts">Posts</A> page to view a list of blog entries.
      </p>
    </main>
  );
}
