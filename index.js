const fs = require('fs');
const http = require('http');
const url = require('url');

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const productData = JSON.parse(data);
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    res.end(tempOverview);
  } else if (pathName === 'product') {
    res.end('This is the product page');
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json'
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    });
    res.end('<h1>Page could not be found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listning on request on port ' + 8000);
});
