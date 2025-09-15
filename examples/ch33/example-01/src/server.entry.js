import express from 'express';
import {
  renderToStream,
  renderToString,
  renderToStringAsync
} from 'solid-js/web';

import { App } from './app';

const PORT = 3000;
const app = express();

app.use(express.static('.'));

app.get('/api/user', (_req, res) => {
  const delay = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    res.json({ name: 'Jenny Doe', email: 'jenny@example.com' });
  }, delay);
});

const home = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Solid SSR Demo</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1>Solid Server-Side Rendering Demo</h1>
    <p>This demo shows the difference between various SSR rendering methods.</p>
    <nav>
      <ul>
        <li><a href="/tostring">SSR (renderToString)</a></li>
        <li><a href="/async">SSR with Suspense (renderToStringAsync)</a></li>
        <li><a href="/stream">Streaming SSR (renderToStream)</a></li>
      </ul>
    </nav>
  </body>
</html>
`;
    
app.get('/', (_req, res) => res.send(home));

app.get('/tostring', (_req, res) => {
  res.set('Content-Type', 'text/html');
  const html = '<!DOCTYPE html>' + renderToString(() => <App />);
  res.send(html);
});

app.get('/async', async (_req, res) => {
  res.set('Content-Type', 'text/html');
  const html = '<!DOCTYPE html>' + (await renderToStringAsync(() => <App />));
  res.send(html);
});

app.get('/stream', (_req, res) => {
  res.set('Content-Type', 'text/html');
  res.write('<!DOCTYPE html>');
  renderToStream(() => <App />).pipe(res);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));