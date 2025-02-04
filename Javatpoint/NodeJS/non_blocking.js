const fs = require('fs');

// Blocking I/O (synchronous)
const data = fs.readFileSync('input.txt', 'utf-8');
console.log(data);

// Non-blocking I/O (asynchronous)
fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
console.log('This runs first');