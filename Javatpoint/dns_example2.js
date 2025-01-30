// Using resolve4() and reverse() functions
// resolve4() function is used to get the IP address of a domain name.
// reverse() function is used to get the domain name of an IP address.

// Import the dns module - it is a built-in module in Node.js used for DNS (Domain Name System) operations.
const dns = require('dns');

// Define the IP address for which you want to get the domain name.
dns.resolve4("www.google.com", (err, addresses) => {
    if (err) {
        console.log(err);
        return;
    }  
    console.log(`addresses: ${JSON.stringify(addresses)}`);
    addresses.forEach(a=>{
        dns.reverse(a, (err, hostnames) => {
            if (err) {
                console.log(err);
                return;
            }  
            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
        });
    });
});