// npx youtube-exec audio --url https://www.youtube.com/watch\?v\=bx3Vy0OmE8k --folder "downloads" --quality "best"

// Uses project-only version of youtube-exec npm package

import { spawn } from 'node:child_process';




const ytUrl = process.argv[2]
const downloadFolder = 'downloads';
const audioQuality = 'best';

const ls = spawn('npx', ['youtube-exec', 'audio', '--url', ytUrl, '--folder' ,downloadFolder, '--quality', audioQuality]);

let stdout_to_filter; 



ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
  stdout_to_filter = String(data);
})

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(stdout_to_filter);
  
});


function uploadToOneDrive(){

}
