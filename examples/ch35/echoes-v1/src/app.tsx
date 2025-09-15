import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, onMount } from "solid-js";
import { isDev } from "solid-js/web";
import { Layout } from "~/components/layout";

import './app.css';

const fallback = (err: any) => {
  if (isDev) {
    onMount(() => {
      throw err; // Use Vite’s error overlay.
    });
  }

  return (
    <div>Something went wrong!</div>
  );
};

export default function App() {
  return (
    <ErrorBoundary fallback={fallback}>
      <Router root={Layout} ><FileRoutes /></Router>
    </ErrorBoundary>
  );
}
