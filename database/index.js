const Sequelize = require('sequelize');
const {
  username,
  password,
} = require('./config');

const sequelize = new Sequelize('restaurants', username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

const Photos = sequelize.define('photos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  restaurant_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
  },
  caption: {
    type: Sequelize.STRING,
  },
  date_posted: {
    type: Sequelize.DATE,
  },
  username: {
    type: Sequelize.STRING,
  },
  hover_data: {
    type: Sequelize.STRING,
  },
});

const findPhotos = id => Photos.findAll({
  where: {
    restaurant_id: id,
  },
});

const insertPhoto = (restaurant, image, caption, date, user, hover_data, create, update) => Photos.create({
  restaurant_id: restaurant,
  image_url: image,
  caption: caption,
  date_posted: date,
  username: user,
  hover_data: hover_data,
  createdAt: create,
  updatedAt: update,
});

const updatePhoto = id => Photos.update({
  username: 'cowie',
}, {
  where: {
    id: id,
  },
});

const deletePhoto = id => Photos.destroy({
  where: {
    id: id,
  },
});


module.exports = {
  findPhotos, updatePhoto, insertPhoto, deletePhoto,
};
