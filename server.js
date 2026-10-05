const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }


  else if (page == '/palindrome') {
    const input = params.palindrome
    const cleanedStr = input.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversedStr = cleanedStr.split('').reverse().join('')

    if (cleanedStr === reversedStr){
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(`Palindrome SUCCESS.`)
    } else {
      res.write(`ERROR 404! Text input is not a palindrome.`)
    }
    res.end();
  }


  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } 
  else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8000);
