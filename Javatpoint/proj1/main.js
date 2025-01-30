// Import the HTTP module and store it in the variable http
var http = require('http');

// Create a server instance using the HTTP module and createServer method
http.createServer(function (req, res) {
    // Send the HTTP response/header
    // Status Code: 200 : OK
    res.writeHead(200, {'Content-type' : 'text/html'});
    // Send the response body
    res.write('Hello World');
    // End the response
    res.end();
}).listen(8080); // The server object listens on port 8080
// Print a message in the terminal indicating the server is running
console.log('Server running at http://127.0.0.1:8080/');
