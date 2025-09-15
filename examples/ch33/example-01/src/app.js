import { createResource, createSignal, ErrorBoundary, Show, Suspense } from 'solid-js';
import { HydrationScript, isServer } from 'solid-js/web';

async function fetchUser() {
  if (isServer) {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 3000);
      setTimeout(() => {
        resolve({ name: 'John Doe', email: 'john@example.com' });
      }, delay);
    });
  }
  const response = await fetch('/api/user');
  return response.json();
}

const Counter = () => {
  const [count, setCount] = createSignal(99);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      Count: {count()} <button onClick={handleClick}>Inc</button>
    </div>
  );
};

const User = () => {
  const [user] = createResource(fetchUser);
  return (
    <Suspense fallback={<div>Loading Profile...</div>}>
      <Show when={user()}>
        <h2>User Profile</h2>
        <div>User name: {user().name}</div>
        <div>Email: {user().email}</div>
      </Show>
    </Suspense>
  );
};

const errorFallback = (err) => {
  console.log(err);
  return <div>Error Occurred!</div>;
};

export const App = () => {
  return (
    <html>
      <head>
        <title>My App</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <HydrationScript />
        <script src="/client.entry.js" type="module"></script>
      </head>
      <body>
        <div id="app">
          <h1>My Application</h1>
          <ErrorBoundary fallback={errorFallback}>
            <Counter />
            <User />
            <User />
            <User />
          </ErrorBoundary>
          <hr />
          <footer>Static content rendered after dynamic components.</footer>
        </div>
      </body>
    </html>
  );
};
