var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("I am Linus doing Node.js");
    res.end()
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081/")