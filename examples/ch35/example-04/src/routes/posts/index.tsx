import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

const posts = [
  { id: "post-1", title: "Understanding Routing" },
  { id: "post-2", title: "Nested Layouts in SolidStart" }
];

export default function PostList() {
  return (
    <main>
      <Title>Posts</Title>
      <h1>Post Index</h1>
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
