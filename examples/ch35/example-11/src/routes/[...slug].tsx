import { Title } from "@solidjs/meta";
import { A, useParams } from "@solidjs/router";

export default function NotFoundPage() {
  const params = useParams();

  return (
    <main>
      <Title>Page Not Found</Title>
      <h1>404 – Page Not Found</h1>
      <p>No route matches: <code>/{params.slug}</code></p>
      <p>
        Return to the <A href="/">Home Page</A>
      </p>
    </main>
  );
}
