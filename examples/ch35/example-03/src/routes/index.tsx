import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome</h1>
      <p>This demo shows how to use optional parameters in SolidStart routes.</p>
      <p>
        Visit the <A href="/docs">Docs</A> or try <A href="/docs/getting-started">/docs/getting-started</A>.
      </p>
    </main>
  );
}