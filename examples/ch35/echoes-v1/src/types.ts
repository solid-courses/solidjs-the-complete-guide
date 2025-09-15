export interface Entity {
  id: string;
}

export interface User extends Entity {
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
}

export type CurrentUser = Omit<User, 'passwordHash' | 'salt'> & {
  salt?: never;
  passwordHash?: never;
};

export interface Quote extends Entity {
  user: User['id'];
  author: string;
  text: string;
  source?: string;
}

export interface Author extends Entity {
  name: string;
  bio?: string;
}

export interface AuthorWithQuotes extends Author {
  quotes: Array<Quote>;
}

export interface SessionData extends Entity {
  email: User['email'];
}

export interface Schema extends Record<string, Array<Entity>> {
  sessions: Array<SessionData>;
  users: Array<User>;
  quotes: Array<Quote>;
  authors: Array<Author>;
}
