import express from 'express';
import { renderToStream } from 'solid-js/web';
import { ClientApp, ServerApp } from './app';
import { getMovie, getMovies } from './movies';

const app = express();
const PORT = 3000;

app.use(express.static('.'));

app.get('/api/movies/:id', async (req, res) => {
  try {
    // get the `id` value from the URL
    const movie = await getMovie(req.params.id);
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/movies', async (req, res) => {
  const movies = await getMovies();
  return res.json(movies);
});

app.use((req, res) => {
  res.set('Content-Type', 'text/html');
  res.write('<!DOCTYPE html>');
  renderToStream(() => (
    <ServerApp>
      <ClientApp url={req.url} />
    </ServerApp>
  )).pipe(res);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
