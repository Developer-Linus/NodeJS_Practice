// fs(file system) module is used for file operations (reading, writing, deleting, etc.)
const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});