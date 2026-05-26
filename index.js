const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Azure Bicep Pipeline!');
});

server.listen(3000);
