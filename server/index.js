require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
var compression = require('compression')
const db = require('../database/primaryIndex');
const redis = require('redis');

const app = express();
app.use(compression());

const PORT = 8888;

app.use(cors());
// app.use(bodyParser.json());
const jsonParser = bodyParser.json();
app.use(express.static(path.join(__dirname, '../client/dist')));

const client = redis.createClient();

client.on('connect', () => {
	client.flushdb((err, success) => console.log('Redis client flushed'))
  console.log('Redis client connected');
});

client.on('error', (err) => {
	console.log('Redis went wrong:', err);
});


app.get('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  client.exists(`${id}`, (err, reply) => {
    if (reply === 1) {
      client.get(`${id}`, (err, reply) => {
        if (err) {
          console.log(err);
          throw err;
        } else {
          res.status(210).send(JSON.parse(reply));
        }
      })
    } else {
      db.getPhotos(id, (err, photo) => {
        if (err) {
          res.status(500).send(err);
          return;
        } else {
          client.set(`${id}`, JSON.stringify(photo.rows));
          res.status(200).send(photo.rows);
        }
      });
    }
  })
});

app.post('/api/photos', jsonParser, (req, res) => {
  db.postPhoto(req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(req.body);
    }
  });
});

app.put('/api/photos/:photoId', jsonParser, (req, res) => {
  const { photoId } = req.params;
  db.updatePhoto(req.body, photoId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(req.body);
    }
  });
});

app.delete('/api/photos/:photoId', (req, res) => {
  const { photoId } = req.params;
  db.deletePhoto(photoId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(`Photo at ${photoId} successfully deleted`);
    }
  });
});

// Shows the page on load even if the above doesn't exist
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, console.log(`Listening to PORT ${PORT}...`));

