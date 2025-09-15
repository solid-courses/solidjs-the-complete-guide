import { query } from '@solidjs/router';

export type Post = {
  id: string;
  title: string;
  content: string;
}

const postsFilePath = 'posts.json';

async function getServerSidePosts(): Promise<Array<Post>> {
  const { readFile } = await import('node:fs/promises');
  const data = await readFile(postsFilePath, 'utf-8');
  const posts: Array<Post> = JSON.parse(data);
  return posts;
}

async function getServerSidePostById(id: string): Promise<Post | undefined> {
  const posts = await getServerSidePosts();
  return posts.find(item => item.id === id);
}

export async function replacePost(value: Post) {
  const posts = await getServerSidePosts();
  const index = posts.findIndex(item => item.id === value.id);
  if (index > -1) posts[index] = value;
  const { writeFileSync } = await import('node:fs');
  writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
}

async function fetchPosts() {
  "use server";
  return await getServerSidePosts();
}

async function fetchPost(id: string) {
  "use server";
  return await getServerSidePostById(id);
}

export const queryPost = query(fetchPost, 'post');

export const queryPosts = query(fetchPosts, 'posts');