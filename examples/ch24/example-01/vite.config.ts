import { defineConfig } from 'vite';

import solid from 'vite-plugin-solid';
import serveUser from './vite-plugin-serve-user';

export default defineConfig({
  plugins: [solid(), serveUser()],
});