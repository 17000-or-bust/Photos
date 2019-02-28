const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index');

const app = express();

const PORT = 8888;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/photos/:id', (req, res) => {
  const {
    id,
  } = req.params;
  db.findPhotos(id)
    .then((photos) => {
      res.status(200).send(photos);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post('/api/photos', (req, res) => {
  const restaurant = req.body.restaurant_id;
  const image = req.body.image_url;
  const caption = req.body.caption;
  const date = req.body.date_posted;
  const user = req.body.username;
  const hover_data = req.body.hover_data;
  const create = req.body.createdAt;
  const update = req.body.updatedAt;

  db.insertPhoto(restaurant, image, caption, date, user, hover_data, create, update)
    .then(() => {
      res.status(201).send(req.body);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

app.put('/api/photos/:id', (req, res) => {
  const {
    id,
  } = req.params;
  db.updatePhoto(id)
    .then((photos) => {
      res.status(200).send(photos);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.delete('/api/photos/:id', (req, res) => {
  const {
    id,
  } = req.params;
  db.deletePhoto(id)
    .then((photos) => {
      res.status(200).send(photos);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Shows the page on load even if the above doesn't exist
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, console.log(`Listening to PORT ${PORT}...`));
