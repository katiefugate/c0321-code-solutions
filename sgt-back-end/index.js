const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');

const app = express();

const json = express.json();

app.use(json);

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"`;
  db.query(sql)
    .then(result => {
      const grades = result;
      res.status(200).json(grades.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const course = req.body.course;
  const name = req.body.name;
  const score = parseInt(req.body.score, 10);
  if (typeof name === 'undefined' || typeof course === 'undefined' || typeof score === 'undefined') {
    res.status(400).json({ error: 'Grade must include a name, course, and score.' });

  } else if (!Number.isInteger(score) || score > 100 || score < 1) {
    res.status(400).json({ error: 'Score must be a number from 1 to 100.' });

  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *`;

    const params = [name, course, score];

    db.query(sql, params)
      .then(result => {
        const newGrade = result.rows[0];
        res.status(201).json(newGrade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpexted error occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const course = req.body.course;
  const name = req.body.name;
  const score = parseInt(req.body.score, 10);
  const gradeId = parseInt(req.params.gradeId, 10);
  if (typeof name === 'undefined' || typeof course === 'undefined' || typeof score === 'undefined') {
    res.status(400).json({ error: 'Grade must include a name, course, and score.' });

  } else if (!Number.isInteger(score) || score > 100 || score < 1) {
    res.status(400).json({ error: 'Score must be a number from 1 to 100.' });

  } else if (!Number.isInteger(gradeId)) {
    res.status(400).json({ error: 'gradeId must be a number.' });
  } else {
    const sql = `
    update "grades"
       set "name" = $2,
           "course" = $3,
           "score" = $4
     where "gradeId" = $1
     returning *`;
    const params = [gradeId, name, course, score];

    db.query(sql, params)
      .then(result => {
        const updatedGrade = result.rows[0];
        if (!updatedGrade) {
          res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}.` });
        } else {
          res.status(200).json(updatedGrade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId)) {
    res.status(400).json({ error: 'gradeId must be a number.' });

  } else {
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *`;

    const params = [gradeId];

    db.query(sql, params)
      .then(result => {
        const deletedGrade = result.rows[0];
        if (!deletedGrade) {
          res.status(404).json({ error: `Cannot find grade with 'gradeId' ${gradeId}.` });
        } else {
          res.status(204).send();
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
