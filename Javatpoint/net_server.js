const net = require('net');
// create a server object
var server = net.createServer((socket)=>{
    socket.end('hello, server\n');
}).on('error', err => {
    //Handle errors here
    throw err;
});
// Grab a random port
server.listen(()=>{
    address = server.address();
    // Print the address
    console.log('opened server on %j', address);
});

// The working of this code snippet is broken down into specific steps:
// 1. Create a server object using net.createServer() method.
// 2. Listen for incoming connections using server.listen() method.
// 3. When a connection is established, send a message to the client using socket.end() method.
// 4. Handle errors using server.on('error') event.
// 5. Print the address of the server using server.address() method.
// 6. Close the server using server.close() method.
// 7. Print a message to the console indicating that the server is closed.