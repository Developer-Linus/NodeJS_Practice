// Promise represent the eventual completion (or failure) of an asynchronous operation.
const fs = require("fs");
const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFilePromise("input.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
