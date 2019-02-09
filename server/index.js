const express = require('express');
const path = require('path');
const { findPhotos } = require('../database/index');
const app = express();

let PORT = 8888;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/photos/:id', (req, res) => {
  let { id } = req.params;
  findPhotos(id)
    .then((photos) => {
      res.status(200).send(photos);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(PORT, console.log(`Listening to PORT ${PORT}...`));

