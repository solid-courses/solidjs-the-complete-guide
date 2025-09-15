import { getServerSidePosts } from "~/database";

export async function GET() {
  return await getServerSidePosts();
}