import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary } from "solid-js";
import { Layout } from "./components/Layout";

import "./app.css";

const errorHandler = (err: any) => {
  console.log(err);
  return <div>Something went wrong!</div>
}

export default function App() {
  return (
    <ErrorBoundary fallback={errorHandler}>
      <Router root={Layout}><FileRoutes /></Router>
    </ErrorBoundary>
  );
};