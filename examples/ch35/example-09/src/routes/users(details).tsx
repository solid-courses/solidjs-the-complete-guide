import { RouteSectionProps } from "@solidjs/router";
import { Suspense } from "solid-js";

export default function UserDetailsLayout(props: RouteSectionProps) {
  return (
    <>
      <header>
        <h1>User Details</h1>
        <p>This section displays detailed information about a single user.</p>
      </header>
      <main>
        <Suspense>{props.children}</Suspense>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} SolidStart Users – Profile Section</p>
      </footer>
    </>
  );
}
