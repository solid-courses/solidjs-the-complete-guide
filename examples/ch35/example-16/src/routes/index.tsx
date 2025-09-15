import { MetaProvider, Title } from "@solidjs/meta";

export default function Home() {
  return (
    <MetaProvider>
      <main>
        <Title>Home | Echoes</Title>
        <h1>Home</h1>
      </main>
    </MetaProvider>
  );
}