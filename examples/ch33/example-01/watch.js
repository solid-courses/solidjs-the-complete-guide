import { spawn } from 'node:child_process';
import { watch } from 'node:fs';

let cp, timer;

function run() {
  console.clear();

  const build = spawn('npx', ['rollup', '-c', 'rollup.config.js'], { stdio: 'inherit' });

  build.on('close', (code) => {
    if (code !== 0) return;

    if (cp) cp.kill();
    cp = spawn('node', ['server.entry.js'], { cwd: 'dist', stdio: 'inherit' });
  });
}

process.on('SIGINT', () => {
  if (cp) cp.kill();
  process.exit();
});

run();

watch('./src', { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(run, 200);
});
