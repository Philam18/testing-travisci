var http = require('http');
http.createServer((req,res)=>{
  console.log(req);
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('Hello Travis!\n')
}).listen(1880,'127.0.0.1');
console.log("Server running");
