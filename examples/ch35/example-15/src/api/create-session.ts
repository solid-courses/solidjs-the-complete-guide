import { HttpHeader } from "@solidjs/start";
import { randomBytes } from 'node:crypto';

async function createSession(email: string) {
  const id = randomBytes(16).toString('hex');
  // Generate and store session information tied to user.
  HttpHeader({ name: "Set-Cookie", value: `sessionId=${id}; HttpOnly; Secure; SameSite=Strict` });
}

export async function authenticateUser(email: string, password: string) {
  // Check user credential and create session.
  await createSession(email);
}