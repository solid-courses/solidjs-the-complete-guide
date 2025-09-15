import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";

export default function CatchAllPost() {
  const params = useParams();
  
  return (
    <main>
      <Title>Nested Path</Title>
      <h1>Catch-All Route</h1>
      <p>Unmatched path: <strong>{params.slug}</strong></p>
    </main>
  );
}
