import { Title } from "@solidjs/meta";
import { action, redirect, useSubmission } from "@solidjs/router";
import { HttpHeader } from "@solidjs/start";
import { Show } from "solid-js";

async function loginUser(formData: FormData) {
  "use server";

  const email = formData.get('email') as string | null;
  if (!email) throw new Error('Email is required');

  const password = formData.get('password') as string | null;
  if (!password) throw new Error('Password is required');

  // Check user credential and create session tied to user.
  const { randomBytes } = await import('node:crypto');
  const id = randomBytes(16).toString('hex');

  //  Return the session id in a cookie.
  HttpHeader({ name: "Set-Cookie", value: `sessionId=${id}; HttpOnly; Secure; SameSite=Strict` });

  throw redirect('/user');
}

const loginUserAction = action(loginUser, 'loginUser');

export default function Home() {
  const loginUserSubmission = useSubmission(loginUserAction);

  return (
    <main>
      <Title>Home</Title>
      <h1>Home</h1>
      <div>
        Visit /user with logged in and without login.
      </div>
      <section>
        <h2>Login</h2>
        <form action={loginUserAction} method="post">
          <Show when={loginUserSubmission.error}>
            <div class="form-group error">
              {loginUserSubmission.error.message}
            </div>
          </Show>

          <div class="form-group email">
            <label>Email</label>
            <input
              type="input"
              name="email"
              placeholder="email"
              value="john@example.com"
              autocomplete="false"
            />
          </div>

          <div class="form-group password">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value="password"
            />
          </div>

          <div class="form-group submit">
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </main>
  );
}
