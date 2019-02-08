const Sequelize = require('sequelize');
const { username, password } = require('./config');

const sequelize = new Sequelize('restaurants', username, password, {
  host: 'localhost',
  dialect: 'mysql'
});

//Schema
const Photo = sequelize.define('photo', {
  id: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
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
    type: Sequelize.DATE
  },
  username: {
    type: Sequelize.STRING
  },
  hover_data: {
    type: Sequelize.STRING
  }
});


