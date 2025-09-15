import { Title } from "@solidjs/meta";
import { HttpHeader } from "@solidjs/start";

export default function Home() {
  return (
    <main>
      <HttpHeader name="Cache-Control" value="max-age=3600" />
      <Title>Home</Title>
      <h1>Home</h1>
      <div>
        Go to a <a href="/missing">missing</a> page.
      </div>
    </main>
  );
}
