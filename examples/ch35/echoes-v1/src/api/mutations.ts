import { action, redirect } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import { database } from "~/api/database";
import { queryAuthors, queryQuotes } from "~/api/queries";
import { Author, Quote } from "~/types";
import {
  authenticateUser,
  deleteSessionById,
  deleteSessionsByEmail,
  generateSalt,
  hashPassword,
  parseCookies
} from "./auth";
import { queryCurrentUser } from "./queries";

export async function clearSessions() {
  "use server";

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  await deleteSessionsByEmail(user.email);

  throw redirect('/login');
}

export async function loginUser(formData: FormData) {
  "use server";

  const email = formData.get('email') as string | null;
  if (!email) throw new Error('Email is required');

  const password = formData.get('password') as string | null;
  if (!password) throw new Error('Password is required');

  await authenticateUser(email, password);

  throw redirect('/user', { revalidate: queryCurrentUser.key });
}

export async function logoutUser() {
  "use server";

  const event = getRequestEvent();
  if (!event) return;

  const { sessionId } = parseCookies(event);
  await deleteSessionById(sessionId);

  throw redirect('/login', { revalidate: queryCurrentUser.key });
}

async function registerUser(formData: FormData) {
  "use server";

  const name = formData.get('name') as string;
  if (!name) throw new Error('Name is required');

  const email = formData.get('email') as string | null;
  if (!email) throw new Error('Email is required');

  const password = formData.get('password') as string | null;
  if (!password) throw new Error('Password is required');

  const salt = generateSalt();
  const passwordHash = await hashPassword(password, salt);

  const Users = await database.table('users');
  const doesExist = Users.findOne(item => item.email === email);
  if (doesExist) throw new Error(`Already registered`);

  Users.create({ name, email, salt, passwordHash });

  await authenticateUser(email, password);

  throw redirect('/user', { revalidate: queryCurrentUser.key });
}

async function createAuthor(formData: FormData) {
  "use server"

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  const name = formData.get('name') as string | null;
  if (!name) throw new Error('Name is required');

  const bio = formData.get('bio') as string | null;

  const Authors = await database.table('authors');
  const author = Authors.create(bio ? { name, bio } : { name });

  throw redirect(`/user/authors/edit/${author.id}`, { revalidate: queryAuthors.key });
}

async function updateAuthor(formData: FormData) {
  "use server"

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  const id = formData.get('id') as string | null;
  if (!id) throw new Error('Id is required');

  const name = formData.get('name') as string | null;
  if (!name) throw new Error('Name is required');

  const bio = formData.get('bio') as string | null;

  const Authors = await database.table('authors');
  Authors.updateById(id, bio ? { name, bio } : { name });
}

async function createQuote(formData: FormData) {
  "use server"

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  const author = formData.get('author') as string | null;
  if (!author) throw new Error('Author is required');

  const Authors = await database.table('authors');
  const isValid = Authors.exists(item => item.id === author);
  if (!isValid) throw new Error("Invalid author");

  const text = formData.get('text') as string | null;
  if (!text) throw new Error('Text is required');

  const Quotes = await database.table('quotes');

  const quote = Quotes.create({
    text,
    author,
    user: user.id
  });

  throw redirect(`/user/quotes/edit/${quote.id}`, { revalidate: queryQuotes.key });
}

async function updateQuote(formData: FormData) {
  "use server";

  const id = formData.get('id') as string | null;
  if (!id) throw new Error('Id is required');

  const author = formData.get('author') as string | null;
  if (!author) throw new Error('Author is required');

  const Authors = await database.table('authors');
  const isValid = Authors.exists(item => item.id === author);
  if (!isValid) throw new Error("Invalid author");

  const text = formData.get('text') as string | null;
  if (!text) throw new Error('Text is required');

  const Quotes = await database.table('quotes');

  Quotes.updateById(id, {
    text,
    author,
  });
}

export async function deleteQuote(id: Quote['id']) {
  "use server";

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  if (!id) throw new Error('id is required');

  const Quotes = await database.table('quotes');
  Quotes.deleteMany(item => item.id === id);
}

export async function deleteQuotes(ids: Array<Quote['id']>) {
  "use server";

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  if (!Array.isArray(ids)) throw new Error('Invalid value');

  const Quotes = await database.table('quotes');
  Quotes.deleteMany(item => ids.includes(item.id));
}

export async function deleteAuthor(id: Author['id']) {
  "use server";

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  if (!id) throw new Error('id is required');

  const Authors = await database.table('authors');
  Authors.deleteMany(item => item.id === id);

  const Quotes = await database.table('quotes');
  Quotes.deleteMany(item => item.author === id);
}

export async function deleteAuthors(ids: Array<Author['id']>) {
  "use server";

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  if (!Array.isArray(ids)) throw new Error('Invalid value');

  const Authors = await database.table('authors');
  Authors.deleteMany(item => ids.includes(item.id));

  const Quotes = await database.table('quotes');
  Quotes.deleteMany(item => ids.includes(item.author));
}

export const clearSessionsAction = action(clearSessions, 'clearSessions');

export const loginUserAction = action(loginUser, 'loginUser');

export const logoutUserAction = action(logoutUser, 'logoutUser');

export const registerUserAction = action(registerUser, 'registerUser');

export const createAuthorAction = action(createAuthor, 'createAuthor');

export const updateAuthorAction = action(updateAuthor, 'updateAuthor');

export const createQuoteAction = action(createQuote, 'createQuote');

export const updateQuoteAction = action(updateQuote, 'updateQuote');

export const deleteAuthorAction = action(deleteAuthor, 'deleteAuthor');

export const deleteAuthorsAction = action(deleteAuthors, 'deleteAuthors');