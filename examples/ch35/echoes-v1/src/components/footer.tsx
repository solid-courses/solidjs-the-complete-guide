import { Component } from "solid-js";

export const Footer: Component = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      © {year} Company Name. All rights reserved.{` | `}
      <a href="/privacy" class="hover:underline">Privacy Policy</a>{` | `}
      <a href="/terms" class="hover:underline">Terms of Service</a>
    </footer>
  );
};
