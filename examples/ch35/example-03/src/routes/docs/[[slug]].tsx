import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";

export default function DocPage() {
  const params = useParams();
  const page = params.slug ?? "overview";

  return (
    <main>
      <Title>Docs: {page}</Title>
      <h1>Documentation</h1>
      <p>Viewing: <strong>{page}</strong></p>
    </main>
  );
}
