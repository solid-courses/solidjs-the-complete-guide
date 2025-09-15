import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";

export default function PostDetail() {
  const params = useParams();

  return (
    <main>
      <Title>Post: {params.postId}</Title>
      <h1>Viewing Post</h1>
      <p>You are viewing the post with ID: <strong>{params.postId}</strong></p>
    </main>
  );
}
