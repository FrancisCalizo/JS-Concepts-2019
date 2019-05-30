const http = require('http');

// Create Server Object
http
  .createServer((req, res) => {
    // Write Response
    res.write('Hello World. This is a running server...');
    res.end();
  })
  .listen(5000, () => console.log('Server Running...'));
