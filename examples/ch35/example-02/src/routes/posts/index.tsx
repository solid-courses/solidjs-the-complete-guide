import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

const posts = [
  { id: "post-1", title: "First Post" },
  { id: "post-2", title: "Second Post" },
  { id: "post-3", title: "Third Post" }
];

export default function PostList() {
  return (
    <main>
      <Title>Posts</Title>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li>
            <A href={`/posts/${post.id}`}>{post.title}</A>
          </li>
        ))}
      </ul>
    </main>
  );
}
