const fs = require('fs');

const rand = Math.random().toString();

fs.writeFile('random.txt', rand, err => {
  if (err) throw err;
});
