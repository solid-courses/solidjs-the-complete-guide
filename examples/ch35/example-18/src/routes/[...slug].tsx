import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main class="not-found">
      <HttpStatusCode code={404} />
      <Title>404 | Not Found</Title>
      <h1>404 Not Found</h1>
      <p>The page you are looking for is not found!</p>
    </main>
  );
}