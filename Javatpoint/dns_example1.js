// Example of dns.lookup() function.
// This function is used to get the IP address of a domain name.

// Import the dns module - it is a built-in module in Node.js used for DNS (Domain Name System) operations.
const dns = require('dns');

// Define the domain name for which you want to get the IP address.
const domainName = 'www.google.com';

// Use the dns.lookup() function to get the IP address of the domain name.
dns.lookup(domainName, (err, address)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`The IP address of ${domainName} is ${address}`);
});