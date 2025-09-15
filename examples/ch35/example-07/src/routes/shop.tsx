import { A, RouteSectionProps } from "@solidjs/router";
import { Suspense } from "solid-js";

export default function ShopLayout(props: RouteSectionProps) {
  return (
    <>
      <header>
        <nav>
          <A href="/">Home</A> | <A href="/shop">Shop</A> | <A href="/shop/products">All Products</A>
        </nav>
      </header>
      <Suspense>{props.children}</Suspense>
      <footer>
        <hr />
        <h2>Why shop with us</h2>
        <ul>
          <li>Fast shipping</li>
          <li>30-day returns</li>
          <li>Secure checkout</li>
        </ul>
      </footer>
    </>
  );
};