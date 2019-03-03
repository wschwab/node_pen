var https = require("https");

https.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

console.log('Server running at https://127.0.0.1:8080/')
