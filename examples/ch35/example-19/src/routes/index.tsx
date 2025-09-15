import { Title } from "@solidjs/meta";
import { clientOnly } from "@solidjs/start";

const ClientMapView = clientOnly(() => import("../components/MapView"));

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Your Location</h1>
      <ClientMapView fallback={<p>Loading map...</p>} />
    </main>
  );
}
