const crypto = require('crypto');
// hashing using cipher
const cipher = crypto.createCipher('aes192', 'a password');
var encrypted = cipher.update('I love cupcakes', 'utf8', 'hex');
// 
encrypted += cipher.final('hex');
console.log(encrypted);
