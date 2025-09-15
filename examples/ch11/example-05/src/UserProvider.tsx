import { createSignal, createContext, type JSXElement } from "solid-js";

interface User {
  name: string;
  email: string;
}

export const UserContext = createContext<() => User | null>();

export function UserProvider(props: { children: JSXElement }) {
  const [user] = createSignal<User>({
    name: "Jane Doe",
    email: "jane@example.com"
  });

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}
