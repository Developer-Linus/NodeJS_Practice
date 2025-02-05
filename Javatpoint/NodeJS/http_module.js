// Used to create servers and clients
const http = require('http');

// Create a server object
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

// Start the server
server.listen(3001, () => {
    console.log('Server running at http://127.0.0.1:3001/');
});