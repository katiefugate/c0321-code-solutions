const fs = require('fs');
const JSONdata = require('./data.json');
const command = process.argv[2];
const third = process.argv[3];

if (command === 'read') {
  for (const key in JSONdata.notes) {
    console.log(key + ':', JSONdata.notes[key]);
  }
} else if (command === 'create') {
  JSONdata.notes[JSONdata.nextId] = third;
  JSONdata.nextId++;
} else if (command === 'delete') {
  delete JSONdata.notes[third];
} else if (command === 'update') {
  JSONdata.notes[third] = process.argv[4];
}

const newData = JSON.stringify(JSONdata, null, 2);
fs.writeFile('data.json', newData, 'utf8', err => {
  if (err) throw err;
});
