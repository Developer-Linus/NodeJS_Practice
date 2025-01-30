const net = require('net');

const client = net.connect({port: 34955}, () => {//use same port of server
    console.log('Connected to server');
    client.write('Hello, server!\r\n');
});
client.on('data', data => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('Disconnected from server');
})

// this code snippet can be throughly explained in the steps below:
// 1. Create a client object using net.connect() method.
// 2. Connect to the server using client.connect() method.
// 3. When the connection is established, write data to the server using client.write() method.
// 4. When data is received from the server, log it to the console using client.on('data') event.
// 5. When the connection is closed, log a message to the console using client.on('end') event.