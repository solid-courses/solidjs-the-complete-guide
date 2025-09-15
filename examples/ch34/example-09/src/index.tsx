import { MatchFilters, Route, Router, RouteSectionProps, useParams } from "@solidjs/router";
import { JSX } from "solid-js";
import { render } from "solid-js/web";

function Post(props: RouteSectionProps): JSX.Element {
  const year = props.params.year;
  const month = props.params.month;
  const day = props.params.day;
  const category = props.params.category;

  return (
    <div>
      <h1>Post</h1>
      <p>Date: {year}-{month}-{day} in {category}</p>
    </div>
  );
}

function NotFound(): JSX.Element {
  return (
    <div>404 Not Found</div>
  )
}

function Home(): JSX.Element {
  return (
    <ul>
      <li>
        <a href="/books/2024/12/15">Valid Post: /books/2024/12/15</a>
      </li>
      <li>
        <a href="/posts/2024/12/15">Invalid Category: /posts/2024/12/15</a>
      </li>
      <li>
        <a href="/books/2024/12/60">Invalid Day: /books/2024/12/60</a>
      </li>
    </ul>
  );
}

export default function App() {
  const filters: MatchFilters = {
    // Matches predefined categories using an array.
    category: ['books', 'games', 'movies'],
    // Matches exactly four digits using a regular expression.
    year: /^\d{4}$/,
    // Matches a range of numbers using a function.
    month: (value: string) => Number(value) >= 1 && Number(value) <= 12,
    // Matches valid days (01–31) using a regular expression.
    day: /^(0[1-9]|[12][0-9]|3[01])$/,
  };

  return (
    <Router>
      <Route path="/" component={Home} />
      <Route
        component={Post}
        matchFilters={filters}
        path="/:category/:year/:month/:day"
      />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

render(() => <App />, document.body);