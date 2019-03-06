const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/primaryIndex');

const app = express();

const PORT = 8888;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  db.getPhotos(id, (err, photo) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(photo);
    }
  });
});

app.post('/api/photos', (req, res) => {
  console.log(req.body)
  db.postPhoto(req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(req.body);
    }
  });
});

app.put('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  db.updatePhoto(req.body, id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(req.body);
    }
  });
});

app.delete('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  db.deletePhoto(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(`Photo at ${id} successfully deleted`);
    }
  });
});

// Shows the page on load even if the above doesn't exist
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, console.log(`Listening to PORT ${PORT}...`));
