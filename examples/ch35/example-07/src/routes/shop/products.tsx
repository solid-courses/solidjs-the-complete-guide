import { A, RouteSectionProps } from "@solidjs/router";

const featured = [
  { id: "sku-1001", name: "Wireless Headphones", blurb: "Noise-cancelling, 30h battery" },
  { id: "sku-1002", name: "4K Ultra HD Monitor", blurb: "27\", crisp and color-accurate" },
  { id: "sku-1003", name: "Mechanical Keyboard", blurb: "Tactile switches, compact layout" }
];

export default function ProductsLayout(props: RouteSectionProps) {
  return (
    <>
      <header>
        <h2>Featured Products</h2>
        <ul>
          {featured.map(item => (
            <li>
              <A href={`/shop/products/${item.id}`}>
                {item.name}
              </A>
              <div>{item.blurb}</div>
            </li>
          ))}
        </ul>
      </header>
      {props.children}
      <footer>
        <hr />
        <p>Looking for something specific? Try <a href="/shop/search">searching</a> it.</p>
      </footer>
    </>
  );
}
