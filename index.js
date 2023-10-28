// npx youtube-exec audio --url https://www.youtube.com/watch\?v\=bx3Vy0OmE8k --folder "downloads" --quality "best"

// Uses project-only version of youtube-exec npm package

// On Windows Only...
import { spawn } from 'node:child_process';

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});