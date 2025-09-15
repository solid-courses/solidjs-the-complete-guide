import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";

export default function ProductDetails() {
  const params = useParams();
  return (
    <main>
      <Title>Product {params.id}</Title>
      <h3>Product Detail</h3>
      <p>ID: {params.id}</p>
      <p>This page uses the shop layout but not the products layout.</p>
    </main>
  );
}
