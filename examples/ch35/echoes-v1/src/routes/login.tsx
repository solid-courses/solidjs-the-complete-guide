import { Title } from "@solidjs/meta";
import { A, createAsync, Navigate, useSubmission } from "@solidjs/router";
import { createMemo, Show } from "solid-js";
import { loginUserAction } from "~/api/mutations";
import { queryRedirectToHomeIfLoggedIn } from "~/api/queries";

export default function Login() {
  const user = createAsync(() => queryRedirectToHomeIfLoggedIn());
  const loginUserSubmission = useSubmission(loginUserAction);

  const disabled = createMemo(() => loginUserSubmission.pending);

  return (
    <Show when={!user()} fallback={<Navigate href="/" />}>
      <main>
        <Title>Login | Echoes</Title>
        <h1>Login</h1>
        <form action={loginUserAction} method="post" id="login">
          <Show when={loginUserSubmission.error}>
            <div class="form-group error">
              {loginUserSubmission.error.message}
            </div>
          </Show>

          <div class="form-group email">
            <label>
              <span>Email</span>
              <input
                type="input"
                name="email"
                placeholder="email"
                value="john@example.com"
                autocomplete="false"
              />
            </label>
          </div>

          <div class="form-group password">
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="password"
                value="password"
              />
            </label>
          </div>

          <div class="form-group submit">
            <button disabled={disabled()} type="submit">Login</button>
          </div>
        </form>
        <div>Not a member? <A href="/register">Register!</A></div>
      </main>
    </Show>
  );
}