import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome</h1>
      <p>
        This example demonstrates <strong>escaping folder-based nesting</strong> in SolidStart’s
        file-based router. Normally, nested route folders inherit layouts from their parent
        directories. By wrapping a folder name in parentheses, you can map to the same URL
        pattern but avoid inheriting the parent folder’s layout.
      </p>
      <p>
        In this demo, <code>/shop/products/:id</code> is served from
        <code>products(details)/[id].tsx</code>. It shares the <code>shop</code> layout, but
        bypasses the <code>products</code> layout entirely.
      </p>
      <h2>Explore the Example</h2>
      <ul>
        <li><A href="/shop">Shop Overview</A></li>
        <li><A href="/shop/products">Product Listing</A></li>
        <li><A href="/shop/products/sku-1001">Example Product Detail</A></li>
      </ul>
    </main>
  );
}
