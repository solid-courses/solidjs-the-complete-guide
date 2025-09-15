import { query, redirect } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import { AuthorWithQuotes } from "~/types";
import { parseCookies } from "./auth";
import { database } from "./database";

async function getCurrentUser() {
  "use server";
  const event = getRequestEvent()!;

  const { sessionId } = parseCookies(event);

  const Sessions = await database.table('sessions');
  const session = Sessions.findById(sessionId);

  if (!session || !session.email) return;

  const Users = await database.table('users');
  const user = Users.findOne(item => item.email === session.email);

  if (user) {
    const { passwordHash, salt, ...rest } = user;
    return rest;
  }
}

async function getCurrentUserOrLogin() {
  "use server";

  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');

  return user;
}

async function redirectToHomeIfLoggedIn(): Promise<void> {
  "user server";
  const user = await queryCurrentUser();
  if (user) throw redirect('/');
}

async function getQuotes() {
  "use server";
  const Quotes = await database.table('quotes');
  return Quotes.findAll();
}

async function getQuote(id: string) {
  "use server";
  const Quotes = await database.table('quotes');
  return Quotes.findOne(item => item.id === id);
}

async function getQuotesByAuthor(authorId: string) {
  "use server";
  const Quotes = await database.table('quotes');
  return Quotes.findAll(item => item.author === authorId);
}

async function getQuotesByUser(userId: string) {
  "use server";
  const Quotes = await database.table('quotes');
  return Quotes.findAll(item => item.user === userId);
}

async function getQuotesAddedByCurrentUser() {
  "use server";
  const user = await queryCurrentUser();
  if (!user) throw redirect('/login');
  return await getQuotesByUser(user.id);
}

async function getAuthors() {
  "use server";
  const Authors = await database.table('authors');
  return Authors.findAll();
}

async function getAuthor(id: string) {
  "use server";
  const Authors = await database.table('authors');
  return Authors.findById(id);
}

async function getAuthorWithQuotes(id: string): Promise<AuthorWithQuotes | undefined> {
  "use server";
  const Authors = await database.table('authors');
  const author = Authors.findOne(item => item.id === id);
  if (author) (author as any).quotes = await getQuotesByAuthor(id);
  return author as AuthorWithQuotes;
}

export const queryCurrentUser = query(getCurrentUser, 'getCurrentUser');

export const queryCurrentUserOrLogin = query(getCurrentUserOrLogin, 'getCurrentUserOrLogin');

export const queryQuote = query(getQuote, "getQuote");

export const queryQuotes = query(getQuotes, "getQuotes");

export const queryAuthor = query(getAuthor, 'getAuthor');

export const queryAuthors = query(getAuthors, "getAuthors");

export const queryAuthorWithQuotes = query(getAuthorWithQuotes, 'getAuthorWithQuotes');

export const queryQuotesByAuthor = query(getQuotesByAuthor, 'getQuotesByAuthor');

export const queryQuotesByCurrentUser = query(getQuotesAddedByCurrentUser, 'getQuotesForCurrentUser');

export const queryRedirectToHomeIfLoggedIn = query(redirectToHomeIfLoggedIn, 'redirectToHomeIfLoggedIn');