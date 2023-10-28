import { spawn } from 'node:child_process';
const ls = spawn('bash', ['shell.sh']);

ls.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
      console.log(`${data}`);
    })
    
    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
    