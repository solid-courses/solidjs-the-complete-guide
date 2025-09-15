import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Welcome</h1>
      <p>
        This example shows how to create a <strong>nested layout</strong> in SolidStart.
        The <code>users.tsx</code> file acts as a layout for all pages inside the
        <code>users/</code> folder.
      </p>
      <p>
        Visit the links below to see how the layout remains consistent across different
        routes within <code>/users</code>.
      </p>
      <ul>
        <li><A href="/users">Users Overview</A></li>
        <li><A href="/users/projects">User Projects</A></li>
        <li><A href="/users/john-doe">Example User Profile</A></li>
      </ul>
    </main>
  );
}