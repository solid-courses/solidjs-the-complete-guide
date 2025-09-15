import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/server.entry.js',
    output: [{ dir: 'dist', format: 'esm' }],
    external: ['solid-js', 'solid-js/web', 'express'],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: [['solid', { generate: 'ssr', hydratable: true }]],
      }),
      nodeResolve({
        preferBuiltins: true,
        exportConditions: ['solid', 'node'],
      }),
    ],
  },
  {
    input: 'src/client.entry.js',
    output: [{ dir: 'dist', format: 'esm' }],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: [['solid', { generate: 'dom', hydratable: true }]],
      }),
      nodeResolve({
        browser: true,
        exportConditions: ['solid']
      }),
    ],
  },
];