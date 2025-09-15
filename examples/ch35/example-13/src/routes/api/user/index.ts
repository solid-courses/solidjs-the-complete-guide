import type { APIEvent } from "@solidjs/start/server";

export async function GET(event: APIEvent) {
  console.log(event.locals.user); // { id: 123, name: "John Doe" }
  return event.locals.user;
}
