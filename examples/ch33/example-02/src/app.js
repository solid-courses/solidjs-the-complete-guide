import { MetaProvider, Title } from '@solidjs/meta';
import { A, Route, Router, useLocation, useParams } from '@solidjs/router';
import { createMemo, createResource, createSignal, useTransition } from 'solid-js';
import { HydrationScript, isServer } from 'solid-js/web';
import { getMovie, getMovies } from './movies';

async function fetchMovie(id) {
  if (isServer) return getMovie(id);
  const response = await fetch(`/api/movies/${id}`);
  if (response.ok) {
    return response.json();
  } else {
    const { error } = await response.json();
    throw new Error(error);
  }
}

async function fetchMovies() {
  if (isServer) return getMovies();
  const response = await fetch(`/api/movies`);
  if (response.ok) {
    return response.json();
  } else {
    const { error } = await response.json();
    throw new Error(error);
  }
}

const Home = () => {
  return (
    <MetaProvider>
      <Title>Movie Explorer</Title>
      <main>
        <h1>Movie Explorer</h1>
        <div>Read about some of the greatest films ever made.</div>
        <div>This application is built with Express and SolidJS.</div>
        <div>It uses Solid Router to navigate between different pages.</div>
        <div>Use the main menu above to explore movies and learn more about them.</div>
      </main>
    </MetaProvider>
  );
};

const About = () => {
  return (
    <MetaProvider>
      <Title>About | Movie Explorer</Title>
      <main>
        <h1>About</h1>
        <p>
          Movie Explorer is a simple app for reading information about a selection of
          movies. It’s built with SolidJS, powered by Express, and uses Solid Router for
          navigation.
        </p>
      </main>
    </MetaProvider>
  );
};

const Movies = () => {
  const [movies] = createResource(fetchMovies);
  return (
    <MetaProvider>
      <Title>Movies | Movie Explorer</Title>
      <Suspense fallback={<div>Loading Movies...</div>}>
        <Show when={movies()}>
          <div>Click a movie title below to view its details.</div>
          <ul>
            <For each={movies()}>
              {(movie) => (
                <li>
                  <A href={String(movie.id)}>{movie.title}</A>
                </li>
              )}
            </For>
          </ul>
        </Show>
      </Suspense>
    </MetaProvider>
  );
};

const Movie = () => {
  const params = useParams();
  const [movie] = createResource(() => params.id, fetchMovie);
  return (
    <MetaProvider>
      <Title>Movie Details | Movie Explorer</Title>
      <Suspense fallback={<div>Loading Profile...</div>}>
        <Show when={movie()}>
          <Title>{movie().title} | Movie Explorer</Title>
          <h1>{movie().title}</h1>
          <p><strong>Year:</strong> {movie().year}</p>
          <p><strong>Director:</strong> {movie().director}</p>
          <p>{movie().synopsis}</p>
        </Show>
      </Suspense>
    </MetaProvider>
  );
};

export default function Explore() {
  const [params, setParams] = createSignal(1);
  const [movie] = createResource(params, fetchMovie);
  const [isPending, startTransition] = useTransition();

  const prevMovie = () => {
    startTransition(() => setParams((param) => param - 1));
  };

  const nextMovie = () => {
    startTransition(() => setParams((param) => param + 1));
  };

  return (
    <Suspense fallback={<div>Loading Profile...</div>}>
      <Show when={movie() && movie.state === 'ready'}>
        <MetaProvider>
          <Title>{movie().title} | Movie Explorer</Title>
          <div class="tab" style={{ opacity: isPending() ? 0.5 : 1 }}>
            <h1>{movie().title}</h1>
            <p><strong>Year:</strong> {movie().year}</p>
            <p><strong>Director:</strong> {movie().director}</p>
            <p>{movie().synopsis}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button disabled={isPending()} onClick={prevMovie}>Prev</button>
            <button disabled={isPending()} onClick={nextMovie}>Next</button>
          </div>
        </MetaProvider>
      </Show>
    </Suspense>
  );
}

const errorFallback = (err, reset) => {
  console.log(err);
  return (
    <div>
      <div>Error Occurred!</div>
      <div>See the console log for details.</div>
      <div>
        <button onClick={reset}>Click to reset the app.</button>
      </div>
    </div>
  );
};

const NotFound = () => {
  const title = '404: Not Found';
  return (
    <MetaProvider>
      <Title>{title}</Title>
      <h1>{title}</h1>
      <p>The page you are looking for is not found!</p>
    </MetaProvider>
  );
};

const Layout = (props) => {
  const menu = [
    { path: '/', name: 'Home' },
    { path: '/movies', name: 'Movies' },
    { path: '/explore', name: 'Explore' },
    { path: '/about', name: 'About' },
  ];

  const location = useLocation();
  const filteredMenu = createMemo(() => {
    return menu.filter((i) => i.path !== location.pathname);
  });

  return (
    <main>
      <header>
        <nav style={{ display: 'flex', gap: '0.5em' }}>
          <For each={filteredMenu()}>
            {(item) => {
              return <a href={item.path}>{item.name}</a>;
            }}
          </For>
        </nav>
        <hr />
      </header>
      {props.children}
      <footer>
        <hr />
        <div>Contact us at support@example.com</div>
      </footer>
    </main>
  );
};

export const ClientApp = (props) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Router url={props.url} root={Layout}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/explore" component={Explore} />
        <Route path="/movies" component={Movies} />
        <Route path="/movies/:id" component={Movie} />
        <Route path="*" component={NotFound} />
      </Router>
    </ErrorBoundary>
  );
};

export const ServerApp = (props) => {
  return (
    <html>
      <head>
        <HydrationScript />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="app">{props.children}</div>
      </body>
      <script src="/client.entry.js" type="module"></script>
    </html>
  );
};
