// Decipher is used for decryption
const crypto = require('crypto');

const decipher = crypto.createDecipher('aes192', 'a password');
var encrypted = "4b2286e51bbafea05b63145e8751478e";

var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

// The detailed breakdown of this code is:
// 1. Import the crypto module.
// 2. Create a decipher object using crypto.createDecipher() method.
// 3. Define the encryption algorithm and key using crypto.createDecipher() method.
// 4. Define the encrypted data in hexadecimal format.
// 5. Update the decipher object with the encrypted data in hexadecimal format.
// 6. Convert the decrypted data to UTF-8 format.
// 7. Log the decrypted data to the console.
// 8. Close the decipher object.
