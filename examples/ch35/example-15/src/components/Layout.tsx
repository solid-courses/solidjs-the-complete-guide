import { MetaProvider } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";
import { Component, Suspense } from "solid-js";

export const Layout: Component<RouteSectionProps> = props => {
  return (
    <MetaProvider>
      <header>
        <nav>
          <a href="/">Home</a>{` `}<a href="/user">User</a>
        </nav>
      </header>
      <Suspense>{props.children}</Suspense>
    </MetaProvider>
  );
};
