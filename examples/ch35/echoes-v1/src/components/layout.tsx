import { MetaProvider } from "@solidjs/meta";
import { RouteSectionProps, createAsync } from "@solidjs/router";
import { Component, Match, Suspense, Switch } from "solid-js";
import { queryCurrentUser } from "~/api/queries";
import { LayoutUser } from "./layout-user";
import { LayoutVisitor } from "./layout-visitor";

export const Layout: Component<RouteSectionProps> = props => {
  const currentUser = createAsync(() => queryCurrentUser());

  return (
    <MetaProvider>
      <Suspense>
        <Switch>
          <Match when={currentUser()}>
            <LayoutUser user={currentUser()!}>{props.children}</LayoutUser>
          </Match>
          <Match when={true}>
            <LayoutVisitor>{props.children}</LayoutVisitor>
          </Match>
        </Switch>
      </Suspense>
    </MetaProvider>
  );
};
