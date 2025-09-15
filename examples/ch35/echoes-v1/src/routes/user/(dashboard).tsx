import { Title } from "@solidjs/meta";
import { A, createAsync, useSubmission } from "@solidjs/router";
import { Show } from "solid-js";
import { clearSessionsAction } from "~/api/mutations";
import { queryCurrentUserOrLogin } from "~/api/queries";

export const route = {
  preload: () => queryCurrentUserOrLogin(),
};

export default function Dashboard() {
  const user = createAsync(() => queryCurrentUserOrLogin());
  const clearSesionsSubmission = useSubmission(clearSessionsAction);

  return (
    <Show when={user()}>
      <main>
        <Title>Dashboard | Echoes</Title>

        <h1>Dashboard</h1>
        <p>Welcome to user dashboard.</p>
        <p>You can see your <A href="quotes">quotes</A> and <A href="authors">authors</A>.</p>

        <h2>End All Active Sessions</h2>
        <p>
          This will end all active sessions for your account on all devices.
          You’ll need to sign in again everywhere.
        </p>

        <form action={clearSessionsAction} method="post">
          <Show when={clearSesionsSubmission.error}>
            {JSON.stringify(clearSesionsSubmission.error)}
          </Show>
          <button type="submit">Clear All Sessions</button>
        </form>
      </main>
    </Show>
  );
}