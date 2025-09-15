import { MetaProvider } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";
import { Component, Suspense } from "solid-js";

export const Layout: Component<RouteSectionProps> = props => {
  return (
    <MetaProvider>
      <header>
        <nav>
          <a href="/">Home</a> | <a href="/posts">Posts</a> | <a href="/login">Login</a>
        </nav>
      </header>
      <Suspense>{props.children}</Suspense>
      <footer>
        <p>Built with 💙 using SolidStart and SolidJS.</p>
      </footer>
    </MetaProvider>
  );
};
