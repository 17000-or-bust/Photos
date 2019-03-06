const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'restaurant',
  port: 5432,
});


const getPhotos = (id, callback) => {
  const queryStr = `SELECT * FROM photos WHERE restaurant_id = ${id}`;
  pool.query(queryStr, (err, photo) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(null, photo);
  });
};

module.exports = {
  getPhotos,
};
