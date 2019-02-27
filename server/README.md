Get Photos

url: /api/photos/:id

Method: Get

Params for URL: id (which will be 1 to 10M)

app.get('/api/photos/:id', (req, res) => {
  const {
    id,
  } = req.params;
  getPhotos(id)
    .then((photos) => {
      res.status(200).send(photos);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});



Post Photo

url: 


