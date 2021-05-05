const data = require('./data.json');

const express = require('express');
const app = express();
const fs = require('fs');

const json = express.json();

app.use(json);

app.get('/api/notes', (req, res) => {
  const allNotes = [];
  for (const keys in data.notes) {
    allNotes.push(data.notes[keys]);
  }
  res.json(allNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const paramId = Number(req.params.id);
  if (Number.isInteger(paramId) === false || Math.sign(paramId) !== 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).send({ error: 'cannot find note with id ' + paramId });
  } else {
    res.json(data.notes[paramId]);
  }
});

let nextId = 10;
for (const keys in data.notes) {
  const key = Number(keys);
  if (key > nextId) {
    nextId = key + 1;
  }
}
app.post('/api/notes', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote = req.body;
    newNote.id = nextId;
    data.notes[nextId] = newNote;
    nextId++;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(201);
        res.json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const paramID = Number(req.params.id);
  if (Number.isInteger(paramID) === false || Math.sign(paramID) !== 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).send({ error: 'cannot find note with id ' + paramID });
  } else {
    delete data.notes[req.params.id];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occurred' });
      } else {
        res.status(204).send();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const paramID = Number(req.params.id);
  if (Number.isInteger(paramID) === false || Math.sign(paramID) !== 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).send({ error: 'cannot find note with id ' + paramID });
  } else if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    data.notes[req.params.id] = req.body;
    data.notes[req.params.id].id = req.params.id;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).send({ error: 'An unexpected error occurred' });
      } else {
        res.status(200);
        res.json(req.body);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
