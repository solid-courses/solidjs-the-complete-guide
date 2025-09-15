import { createMiddleware } from "@solidjs/start/middleware";

export default createMiddleware({
  onRequest: (event) => {
    event.locals.start = Date.now();
    event.locals.user = { id: 123, name: "John Doe" };
  },
  onBeforeResponse: (event) => {
    const duration = Date.now() - event.locals.start;
    event.response.headers.set("x-response-time-ms", String(duration));
  },
});
