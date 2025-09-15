import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

const products = [
  { name: "Product A", price: "$25" },
  { name: "Product B", price: "$40" },
  { name: "Product C", price: "$60" },
];

export default function Products() {
  return (
    <main>
      <Title>Products</Title>
      <h1>Our Products</h1>
      <ul>
        {products.map(product => (
          <li>
            <strong>{product.name}</strong>: {product.price}
          </li>
        ))}
      </ul>
      <p>
        Want detailed pricing?
        <A href="/products/pricing">Check pricing info</A>.
      </p>
    </main>
  );
}
