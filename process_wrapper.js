// npx youtube-exec audio --url https://www.youtube.com/watch\?v\=bx3Vy0OmE8k --folder "downloads" --quality "best"

// Uses project-only version of youtube-exec npm package

// import { spawn } from 'node:child_process';
const child_process = require('child_process');

function process_wrapper(urlVal){



const ytUrl = urlVal;
const downloadFolder = 'downloads';
const audioQuality = 'best';

const ls = child_process.spawn('npx', ['youtube-exec', 'audio', '--url', ytUrl, '--folder' ,downloadFolder, '--quality', audioQuality]);

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
  stdout_to_filter = stdout_to_filter.trim();
  console.log(stdout_to_filter.length);

  uploadToOneDrive(stdout_to_filter);
});





}




function deleteFile(filename){

  const deletePs = child_process.spawn('rm', [`./downloads/${filename}`]);

  
}


function uploadToOneDrive(filename){

  // call the childprocess to spawn a rclone process.
  const rclone_ps = chil_process.spawn('rclone', ['copy', `./downloads/${filename}`, 'onedrive:streaming_music']);

  rclone_ps.stdout.on('data', (data1) => {
    //   console.log(`stdout: ${data}`);
      stdout_to_filter = String(data1);
    })
    
    rclone_ps.stderr.on('data', (data1) => {
      console.error(`stderr: ${data1}`);
    });
    
    rclone_ps.on('close', (code) => {
      
      // Delete after upload.
      deleteFile(filename);
    });
    


}


module.exports = process_wrapper;
