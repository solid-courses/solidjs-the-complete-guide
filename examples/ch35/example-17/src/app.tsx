import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Layout } from "./components/layout";

import "./app.css";

export default function App() {
  return (
    <Router root={Layout}>
      <FileRoutes />
    </Router>
  );
}
