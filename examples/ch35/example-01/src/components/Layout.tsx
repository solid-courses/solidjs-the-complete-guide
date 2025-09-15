import { MetaProvider } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";
import { Component, Suspense } from "solid-js";

export const Layout: Component<RouteSectionProps> = props => {
  return (
    <MetaProvider>
      <header>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/products">Products</a>
        </nav>
      </header>
      <Suspense>{props.children}</Suspense>
      <footer>
        <p>Built with 💙 using SolidStart and SolidJS.</p>
      </footer>
    </MetaProvider>
  );
};
