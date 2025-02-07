// Callback is a function passed as an argument to another function and is executed after a task completes.
const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// The readFile object calls the function after it has read the file 'input.txt'.
