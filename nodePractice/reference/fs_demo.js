// "FS Module is used for actually operating on files. Path Module for manipulating
// paths, which you may then use with the fs module"
const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// Create and Write to a File
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "hello world", err => {
//   if (err) throw err;
//   console.log("File written to...");

//   // File Append
//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     " I love Node.js",
//     err => {
//       if (err) throw err;
//       console.log("File written to...");
//     }
//   );
// });

// Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename File
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  (err, data) => {
    if (err) throw err;
    console.log(`File renamed...`);
  }
);
