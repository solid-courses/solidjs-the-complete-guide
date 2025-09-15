import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Home</h1>
      <p>
        This demo calls a server function wrapped with <code>GET</code>, which generates an HTTP
        endpoint. The <code>:id</code> route parameter selects the profile from a
        predefined list.
      </p>
      <div><a href="/profile/1">Go to /profile/1</a></div>
      <div><a href="/profile/44">Go to /profile/44</a></div>
    </main>
  );
}
