var http = require('http');
http.createServer((req,res)=>{
  console.log(req);
  res.writeHead(200,{'Content-type' : 'text/plain'});
  res.end('Hello world!');
}).listen(8000, '127.0.0.1');

console.log("server on!");
