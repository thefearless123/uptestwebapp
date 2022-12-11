const http = require('http');
const fs = require("fs");
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;
let indexPage = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(fs.readFileSync('./index.html'));
}
const server = http.createServer((req, res) => {
  indexPage(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
