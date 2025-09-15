import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { users } from "../data";

export default function UsersIndex() {
  return (
    <main>
      <Title>Users</Title>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li>
            <A href={`/users/${user.id}`}>
              {user.name} – {user.role}
            </A>
          </li>
        ))}
      </ul>
    </main>
  );
}
