import { RouteSectionProps } from "@solidjs/router";
import { Suspense } from "solid-js";

export default function UsersLayout(props: RouteSectionProps) {
  return (
    <>
      <header>
        <h1>Users Area</h1>
        <nav>
          <a href="/">Home</a> | <a href="/users">Overview</a> | <a href="/users/projects">Projects</a>
        </nav>
      </header>
      <main>
        <Suspense>{props.children}</Suspense>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} SolidStart Users</p>
      </footer>
    </>
  );
}