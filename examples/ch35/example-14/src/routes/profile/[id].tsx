import { Title } from "@solidjs/meta";
import { createAsync, json, query, RouteSectionProps } from "@solidjs/router";
import { GET } from "@solidjs/start";

const profiles = [
  { id: "1", name: "Alice", active: true },
  { id: "2", name: "Bob", active: false },
  { id: "3", name: "Charlie", active: true },
];

function generateRequestId() {
  return Math.random().toString(36).slice(2, 10);
}

const getProfile = GET(async (id: string) => {
  "use server";

  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    return json({ error: "Profile not found" }, { status: 404 });
  }

  return json(
    { ...profile, fetchedAt: Date.now() },
    {
      headers: {
        "cache-control": "no-store",
        "x-request-id": generateRequestId(),
      },
    }
  );
});

const profileQuery = query(getProfile, "profile");

export default function ProfilePage(props: RouteSectionProps) {

  const profile = createAsync(async () => {
    return await profileQuery(props.params.id);
  });

  const refresh = async () => {
    const data = await getProfile(props.params.id);
    console.log("Profile data:", data);
  };

  return (
    <main>
      <Title>Profile</Title>
      <h1>Profile #{props.params.id}</h1>

      <pre>{JSON.stringify(profile(), null, 2)}</pre>

      <div>
        <button onClick={refresh}>Refresh & inspect headers</button>
      </div>
    </main >
  );
}
