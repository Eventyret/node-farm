const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('Welcome to the Overview Page');
  } else if (pathName === 'product') {
    res.end('This is the product page');
  } else {
    res.writeHead(404)
    res.end('Page could not be found');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listning on request on port ' + 8000);
});
