import { HttpHeader } from "@solidjs/start";
import { pbkdf2, randomBytes } from 'node:crypto';
import { RequestEvent } from 'solid-js/web';
import { database } from './database';

export function generateSalt() {
  return randomBytes(32).toString('hex');
}

export function hashPassword(password: string, salt: string): Promise<string> {
  const PBKDF2_ITERATIONS = 100000;
  const PBKDF2_KEY_LENGTH = 64;
  return new Promise((resolve, reject) => {
    pbkdf2(
      password,
      salt,
      PBKDF2_ITERATIONS,
      PBKDF2_KEY_LENGTH,
      'sha512',
      (err, derivedKey) => {
        if (err) reject(err);
        resolve(derivedKey.toString('hex'));
      }
    );
  });
}

export async function authenticateUser(email: string, password: string) {
  if (typeof email !== "string" || email === "" ||
      typeof password !== "string" || password === "") {
    throw new Error("Invalid username or password");
  }
  
  const Users = await database.table('users');

  const user = Users.findOne(item => item.email === email);
  if (!user) throw new Error('Invalid username or password');

  const passwordHash = await hashPassword(password, user.salt);
  if (passwordHash === user.passwordHash) {
    await createSession(email);
  } else {
    throw new Error('Invalid username or password');
  }
}

export async function createSession(email: string) {
  const id = randomBytes(16).toString('hex');
  const Sessions = await database.table('sessions');
  const session = Sessions.create({ id, email });
  HttpHeader({ name: "Set-Cookie", value: `sessionId=${session.id}; HttpOnly; Secure; SameSite=Strict` });
}

export async function deleteSessionById(id: string) {
  const Sessions = await database.table('sessions');
  Sessions.deleteById(id);
  HttpHeader({ name: "Set-Cookie", value: 'sessionId=; HttpOnly; Max-Age=0; Secure; SameSite=Strict' });
}

export async function deleteSessionsByEmail(email: string) {
  const Sessions = await database.table('sessions');
  Sessions.deleteMany(item => item.email === email);
  HttpHeader({ name: "Set-Cookie", value: 'sessionId=; HttpOnly; Max-Age=0; Secure; SameSite=Strict' });
}

export function parseCookies(event: RequestEvent) {
  const cookies: Record<string, string> = {};
  const rawCookies = event.request.headers.get('cookie');
  if (rawCookies) {
    rawCookies.split(';').forEach((cookie) => {
      const [name, value] = cookie.split('=').map((c) => c.trim());
      cookies[name] = value;
    });
  }
  return cookies;
}