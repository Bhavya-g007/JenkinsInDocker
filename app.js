const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Hello from Jenkins Docker Agent!");
});
server.listen(3000);
