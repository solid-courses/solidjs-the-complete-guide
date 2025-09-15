import { useContext } from "solid-js";
import { UserContext } from "./UserProvider";

export function UserProfile() {
  const user = useContext(UserContext);

  return (
    <section>
      {user ? (
        <section>
          <h2>Welcome, {user()!.name}</h2>
          <p>Email: {user()!.email}</p>
        </section>
      ) : (
        <p>No user available.</p>
      )}
    </section>
  );
}
