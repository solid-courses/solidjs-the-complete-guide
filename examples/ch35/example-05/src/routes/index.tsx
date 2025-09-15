import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome</h1>
      <p>This demo shows how to rename index files for better discoverability in SolidStart.</p>
      <p>
        Visit the <A href="/blog">Blog</A> to read articles, or go to the <A href="/contact">Contact</A> page to reach out.
      </p>
    </main>
  );
}
