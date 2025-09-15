import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { users } from "../data";

export default function UserDetail() {
  const params = useParams();
  const user = users.find(u => u.id === params.id);

  if (!user) {
    return (
      <main>
        <Title>User Not Found</Title>
        <h2>User Not Found</h2>
        <p>No profile found for ID: {params.id}</p>
      </main>
    );
  }

  return (
    <main>
      <Title>{user.name}</Title>
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <h3>Projects</h3>
      <ul>
        {user.projects.map(project => (
          <li>{project}</li>
        ))}
      </ul>
    </main>
  );
}
