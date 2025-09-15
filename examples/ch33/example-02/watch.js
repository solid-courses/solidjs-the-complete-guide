import { spawn } from 'node:child_process';
import { watch } from 'node:fs';

let cp;
let timer;

function log(msg) {
  console.log(`[${new Date().toLocaleTimeString()}] ${msg}`);
}

function startBuildAndServer() {
  console.clear();
  log('Starting build...');

  const build = spawn('npx', ['rollup', '-c', 'rollup.config.js'], { stdio: 'inherit' });

  build.on('error', (err) => {
    log(`Build process error: ${err.message}`);
  });

  build.on('close', (code) => {
    if (code !== 0) {
      log(`Build failed (code ${code}). Will retry on file change...`);
      return;
    }

    log('Build succeeded. Starting server...');

    if (cp) {
      log('Stopping old server...');
      cp.kill();
    }

    cp = spawn('node', ['server.entry.js'], { cwd: 'dist', stdio: 'inherit' });

    cp.on('error', (err) => {
      log(`Server process error: ${err.message}`);
    });

    cp.on('close', (serverCode) => {
      log(`Server stopped (code ${serverCode}). Will restart on file change...`);
    });
  });
}

process.on('SIGINT', () => {
  log('Shutting down...');
  if (cp) cp.kill();
  process.exit();
});

process.on('uncaughtException', (err) => {
  log(`Uncaught exception: ${err.stack || err}`);
});

process.on('unhandledRejection', (reason) => {
  log(`Unhandled rejection: ${reason}`);
});

startBuildAndServer();

watch('./src', { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    log('File changes detected. Restarting build...');
    startBuildAndServer();
  }, 200);
});
