import { MetaProvider } from "@solidjs/meta";
import { A, RouteSectionProps } from "@solidjs/router";
import { Component, Suspense } from "solid-js";

export const Layout: Component<RouteSectionProps> = props => {
  return (
    <MetaProvider>
      <header>
        <nav>
          <A href="/">Home</A> | <A href="/posts">Posts</A>
        </nav>
      </header>
      <Suspense>{props.children}</Suspense>
    </MetaProvider>
  );
};
