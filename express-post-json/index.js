const express = require('express');
const app = express();

const grades = {};

app.get('/api/grades', (req, res) => {
  res.json(grades);
});
const json = express.json();

app.use(json);

let nextId = 1;

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[newGrade.id] = newGrade;
  res.json(newGrade);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
