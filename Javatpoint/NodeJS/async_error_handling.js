const fs = require("fs");

fs.readFile("inputi.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log(data);
});
