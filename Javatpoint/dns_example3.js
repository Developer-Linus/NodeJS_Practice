// Example using lookupservice() function to print the name of localhost name
// lookupservice() function is used to get the name of the local host.

// Import the dns module - it is a built-in module in Node.js used for DNS (Domain Name System) operations.
const dns = require('dns');

// Use the dns.lookupservice() function to get the name of the local host.
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`The name of the local host is ${hostname}`);
});

// 22 is the port number
// service is the name of the service
// hostname is the name of the local host
