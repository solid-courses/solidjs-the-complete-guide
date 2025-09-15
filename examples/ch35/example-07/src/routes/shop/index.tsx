import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function ShopHome() {
  return (
    <main>
      <Title>Shop</Title>
      <h1>Shop</h1>
      <p>Discover curated tech gear and accessories. Browse everything or jump straight to a product.</p>
      <p>
        <A href="/shop/products">View all products</A>
      </p>
    </main>
  );
}
