import { MetaProvider } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";
import { Component, Suspense } from "solid-js";

export const Layout: Component<RouteSectionProps> = props => {
  return (
    <MetaProvider>
      <Suspense>{props.children}</Suspense>
    </MetaProvider>
  );
};
