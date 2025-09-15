import { action, createAsync, redirect } from "@solidjs/router";
import { HttpHeader } from "@solidjs/start";
import { getUserInfo } from "~/api/get-user-info";

async function logoutUser() {
  "use server";
  HttpHeader({ name: "Set-Cookie", value: 'sessionId=; HttpOnly; Max-Age=0; Secure; SameSite=Strict' });
  throw redirect('/');
}

const logoutUserAction = action(logoutUser, 'logoutUser');

export default function UserProfile() {
  const user = createAsync<User>(() => getUserInfo());

  return (
    <main>
      {user() ? (
        <div>
          <p>User ID: {user()!.id}</p>
          <p>User Name: {user()!.name}</p>
          <form action={logoutUserAction} method="post">
            <button type="submit">Clear Session Cookie</button>
          </form>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </main>
  );
}