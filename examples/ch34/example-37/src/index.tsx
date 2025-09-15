import {
  Navigate,
  Route,
  Router,
  action,
  createAsync,
  query,
  redirect,
  useNavigate,
  useSubmission
} from "@solidjs/router";
import {
  Component,
  For,
  Show,
  Suspense,
  createSignal
} from "solid-js";
import { render } from "solid-js/web";

type Post = { id: string; title: string };

type User = { name: string, email: string };

let currentUser: User | undefined;

const posts: Array<Post> = [
  { id: "1", title: "Understanding JavaScript Closures" },
  { id: "2", title: "Getting Started with SolidJS" },
  { id: "3", title: "10 Tips for Writing Clean Code" },
  { id: "4", title: "Improving Web Performance in 2025" },
  { id: "5", title: "How to Build Reusable Components" },
  { id: "6", title: "Managing State Effectively" },
  { id: "7", title: "Routing Strategies for SPAs" },
  { id: "8", title: "Error Handling Best Practices" },
  { id: "9", title: "Authentication in Modern Web Apps" },
  { id: "10", title: "Deploying Apps with Vite and Netlify" }
];

function fetchPosts(): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...posts]), 500);
  });
}

async function fetchCurrentUser() {
  return currentUser;
}

async function deletePost(formData: FormData) {
  const user = await queryCurrentUser();
  if (!user) throw redirect("/login");

  const id = formData.get("id") as string;
  if (!id) throw new Error('Missing post ID');

  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) throw new Error("Post not found.");

  posts.splice(index, 1);

  return { message: `Post ${id} deleted successfully.` };
}

async function loginUser(formData: FormData) {
  const name = formData.get("name") as string;
  if (!name) throw new Error('Name is required!');

  const email = formData.get("email") as string;
  if (!email) throw new Error('Email is required!');

  currentUser = { name, email };

  throw redirect('/');
}

const queryPosts = query(fetchPosts, "posts");

const queryCurrentUser = query(fetchCurrentUser, "current-user");

const actionDeletePost = action(deletePost, "delete-post");

const actionLogin = action(loginUser, 'login');

const PostList: Component = () => {
  const posts = createAsync(() => queryPosts());
  const user = createAsync(() => queryCurrentUser());
  const submission = useSubmission(actionDeletePost);

  return (
    <div>
      <h1>Posts</h1>
      <p>
        <Show
          when={user()}
          fallback={<a href="/login">Log in to delete posts.</a>}
        >
          You are logged in as {user()!.name}.
        </Show>
      </p>
      <Suspense fallback={<p>Loading posts…</p>}>
        <Show when={posts()}>
          <h2>Posts</h2>
          <For each={posts()}>
            {(post) => (
              <form action={actionDeletePost} method="post">
                #{post.id}. {post.title}{` `}
                <input name="id" type="hidden" value={post.id} />
                <button disabled={submission.pending}>Delete</button>
              </form>
            )}
          </For>
          <div>
            <h2>Delete Post</h2>
            <p>Please enter the ID of the post you’d like to delete.</p>
            <form action={actionDeletePost} method="post">
              <input name="id" />{` `}
              <button disabled={submission.pending}>Delete</button>
            </form>
          </div>
        </Show>
      </Suspense>

      <Show when={submission.pending}>
        <p>Deleting post...</p>
      </Show>

      <Show when={submission.result}>
        <p>
          Submission Result: {submission.result!.message}{` `}
          <button onClick={() => submission.clear()}>Clear</button>
        </p>
      </Show>

      <Show when={submission.error}>
        <p>
          Error: {submission.error.message}
          <button onClick={() => submission.retry()}>Retry</button>
          <button onClick={() => submission.clear()}>Clear</button>
        </p>
      </Show>
    </div>
  );
};

const Login: Component = () => {
  const user = createAsync(() => queryCurrentUser());
  const submission = useSubmission(actionLogin);

  return (
    <Suspense>
      <Show when={!user()} fallback={<Navigate href="/" />}>
        <h1>Login</h1>

        <form action={actionLogin} method="post">
          <div>
            <label for="name">Name:</label>
            <input name="name" value="John Doe" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input name="email" value="john@example.com" />
          </div>
          <div>
            <button disabled={submission.pending}>Login</button>
          </div>
        </form>

        <Show when={submission.error}>
          <p>
            Login Error: {submission.error.message}
            <button onClick={() => submission.retry()}>Retry</button>
            <button onClick={() => submission.clear()}>Clear</button>
          </p>
        </Show>
      </Show>
    </Suspense>
  );
};

function App() {
  return (
    <Router>
      <Route path="/" component={PostList} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

render(() => <App />, document.body);
