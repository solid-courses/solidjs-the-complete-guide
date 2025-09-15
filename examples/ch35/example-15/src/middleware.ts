import { createMiddleware } from "@solidjs/start/middleware";
import { RequestEvent } from "solid-js/web";

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

export default createMiddleware({
  onRequest: (event) => {
    const { sessionId } = parseCookies(event);
    if (sessionId) {
      // Verify the sessionId and attach user information.
      event.locals.user = { id: 42, name: "John Doe" };
    }
  },
});