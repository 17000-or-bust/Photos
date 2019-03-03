const mongoose = require('mongoose');

const photos = new mongoose.Schema({
  id: Number,
  restaurant_id: Number,
  image_url: String,
  caption: String,
  hover_data: String,
  date_posted: String
});

module.exports = photos;
