import { Title } from "@solidjs/meta";
import { A, createAsync, Navigate, useSubmission } from "@solidjs/router";
import { createMemo, Show } from "solid-js";
import { registerUserAction } from "~/api/mutations";
import { queryRedirectToHomeIfLoggedIn } from "~/api/queries";

export default function Register() {
  const user = createAsync(() => queryRedirectToHomeIfLoggedIn());
  const registerUserSubmission = useSubmission(registerUserAction);
  const disabled = createMemo(() => registerUserSubmission.pending);

  return (
    <Show when={!user()} fallback={<Navigate href="/" />}>
      <main>
        <Title>Register | Echoes</Title>
        <h1>Register</h1>
        <form action={registerUserAction} method="post" id="register">
          <Show when={registerUserSubmission.error}>
            <div class="form-group error">
              {registerUserSubmission.error.message}
            </div>
          </Show>

          <div class="form-group name">
            <label>
              <span>Name</span>
              <input
                type="input"
                name="name"
                placeholder="name"
                autocomplete="false"
              />
            </label>
          </div>

          <div class="form-group email">
            <label>
              <span>Email</span>
              <input
                type="input"
                name="email"
                placeholder="email"
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
              />
            </label>
          </div>

          <div class="form-group submit">
            <button type="submit" disabled={disabled()}>Register</button>
          </div>
        </form>
        <div>Already registered? Go to <A href="/login">login!</A></div>
      </main>
    </Show>
  );
}
