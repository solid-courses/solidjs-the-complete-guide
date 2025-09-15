import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

const products = [
  { id: "sku-1001", name: "Wireless Headphones", price: 99.99 },
  { id: "sku-1002", name: "4K Ultra HD Monitor", price: 299.99 },
  { id: "sku-1003", name: "Mechanical Keyboard", price: 79.99 },
  { id: "sku-1004", name: "Smartphone Stand", price: 19.99 },
];

export default function ProductsIndex() {
  return (
    <main>
      <Title>Products</Title>
      <h1>Our Products</h1>
      <p>Browse our curated selection of tech products and accessories.</p>
      <ul>
        {products.map(product => (
          <li>
            <A href={`/shop/products/${product.id}`}>
              {product.name} – ${product.price.toFixed(2)}
            </A>
          </li>
        ))}
      </ul>
    </main>
  );
}
