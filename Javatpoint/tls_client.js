// Import tls module for TLS (Transport Layer Security)
const tls = require('tls');
// Define function to handle socket connection
function connected(stream){
    if(stream){
        // socket connected
        stream.write("GET / HTTP/1.0\n\rHost: encrypted.google.com:443\n\r\n\r");
    }else{
        // socket not connected
        console.log("Connection failed!");
    }
}
// Needed to keep socket variable in scope
var dummy = this;
// try to connect to the server
dummy.socket = tls.connect(443, 'encrypted.google.com', function(){
    // Callback called only after successful socket connection
    dummy.connected = true;
    if(dummy.socket.authorized){
        // authorization successful
        dummy.socket.setEncodint('utf-8');
        connected(dummy.socket);
    }else{
        // authorization failed
        console.log(dummy.socket.authorizationError);
        connected(null);
    }
});
dummy.socket.addListener('data', function(data){
    // data received
    console.log(data);
});
dummy.socket.addListener('error', function(error){
    if(!dummy.connected){
        // socket was not connected, notify callback
        connected(null);
    }
    console.log("FAIL");
    console.log(error);
});
dummy.socket.addListener('close', function(){
    
});

// The code breakdown in very simple steps entail:
// 1. Import the tls module.
// 2. Create a socket variable using tls.connect() method.
// 3. Add a listener to the socket object using socket.addListener() method.
// 4. Add a listener to the socket object using socket.addListener() method.
// 5. Add a listener to the socket object using socket.addListener() method.

