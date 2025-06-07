const { spawn } = require('child_process');

const phpPath = 'file:///C:/Users/User/workspace/Airline__Reservation/src/main/webapp/php/login.php'; // Replace with your PHP path

const php = spawn(phpPath, ['path/to/your/php/script.php']);

php.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

php.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

php.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
