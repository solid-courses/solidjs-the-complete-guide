import { Title } from "@solidjs/meta";
import { RouteSectionProps, useParams } from "@solidjs/router";

export default function PostDetail(props: RouteSectionProps) {
  return (
    <main>
      <Title>Post: {props.params.postId}</Title>
      <h1>Post Details</h1>
      <p>
        You are viewing the post with ID:
        <strong>{props.params.postId}</strong>
      </p>
      <PostID />
      <h2>URL information</h2>
      <pre>{JSON.stringify(props.location, null, 2)}</pre>
    </main>
  );
}

function PostID() {
  const params = useParams();
  return (
    <section>
      <h2>Post ID</h2>
      <p>You are viewing the post with ID: <strong>{params.postId}</strong></p>
    </section>
  );
}
