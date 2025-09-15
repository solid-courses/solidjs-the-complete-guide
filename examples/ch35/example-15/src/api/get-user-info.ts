import { getRequestEvent } from "solid-js/web";

export function getUserInfo() {
  "use server";
  const event = getRequestEvent();
  return event?.locals.user ?? null;
}