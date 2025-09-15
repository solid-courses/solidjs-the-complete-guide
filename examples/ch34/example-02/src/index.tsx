import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { ErrorBoundary } from "solid-js";

const fallback = (err: any) => {
  console.log(err);
  return <div>Something went wrong.</div>;
};

const App = () => {
  return (
    <ErrorBoundary fallback={fallback}>
      <Router />
    </ErrorBoundary>
  );
};

render(() => <App />, document.body);