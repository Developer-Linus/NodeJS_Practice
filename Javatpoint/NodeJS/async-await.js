// Async/await is the syntactic sugar of promises. It is used to write asynchronous code in a more readable and maintainable way.

const fs = require("fs");
const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const readAsync = async () => {
  try {
    const first = await readFilePromise("input.txt");
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};

readAsync();
