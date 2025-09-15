import { Title } from "@solidjs/meta";

export default function Home() {

  const handleClick = async () => {
    const response = await fetch("/api/user");
    const user = await response.json();

    console.log("User data:", user);

    const responseTime = response.headers.get("x-response-time-ms");
    if (responseTime) {
      console.log(`Response time: ${responseTime} ms`);
    } else {
      console.log("No x-response-time-ms header found");
    }
  };

  return (
    <main>
      <Title>Home</Title>
      <h1>Home</h1>
      <p>
        This page demonstrates fetching user data from the <code>/api/user</code> endpoint
        and logging both the returned object and the custom <code>x-response-time-ms</code>{" "}
        header added by middleware.
      </p>
      <div>
        <button onClick={handleClick}>Log User</button>
      </div>
    </main>
  );
}
