const { Pool } = require('pg');

const pool = new Pool({
  user: 'Cowie',
  host: 'ec2-54-208-112-151.compute-1.amazonaws.com',
  database: 'restaurant',
  port: 5432,
});

const getPhotos = (id, callback) => {
  const queryStr = `SELECT * FROM photos WHERE restaurant_id = ${id}`;
  pool.query(queryStr, (err, photo) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, photo);
  });
};

const postPhoto = (info, callback) => {
  const queryStr = `INSERT INTO photos (id, restaurant_id, image_url, caption, username, hover_data, date_posted)
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const params = [info.id, info.restaurant_id, info.image_url, info.caption, info.username, info.hover_data, info.date_posted];
  pool.query(queryStr, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const updatePhoto = (info, photoId, callback) => {
  const queryStr = `UPDATE photos SET restaurant_id = $1, image_url = $2,
  caption = $3, username = $4, hover_data = $5, date_posted = $6 WHERE id = ${photoId}`;
  const params = [info.restaurant_id, info.image_url, info.caption, info.username, info.hover_data, info.date_posted];
  pool.query(queryStr, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const deletePhoto = (photoId, callback) => {
  const queryStr = `DELETE FROM photos WHERE id = ${photoId}`;
  pool.query(queryStr, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

module.exports = {
  getPhotos, postPhoto, updatePhoto, deletePhoto,
};
