const Sequelize = require('sequelize');
const faker = require('faker');
const { username, password } = require('./config');

const sequelize = new Sequelize('restaurants', username, password, {
  host: 'localhost',
  dialect: 'mysql'
});

//Creates database
// sequelize.query("CREATE DATABASE restaurants;");

//Schema
const Photos = sequelize.define('photos', {
  id: {
    type: Sequelize.INTEGER,
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

//Create table and insert rows
Photos.sync({
  force: true
})
  .then(
    () => {
      let photoTable = [];
      //i = restaurant ids
      for (let i = 1; i <= 100; i++) {
        let randomMax = Math.floor(Math.random() * 30) + 20;
        for (let j = 0; j <= randomMax; j++) {
          var photoRow = Photos.build({
            restaurant_id: i,
            image_url: `https://s3-us-west-1.amazonaws.com/waitonme/photos/food${i}.jpg`,
            caption: faker.random.words(),
            date_posted: faker.date.past(),
            username: faker.name.findName(),
            hover_data: faker.random.words(),
          }).save();
          photoTable.push(photoRow);
        }
      }
      return Promise.all(photoTable);
    }
  )
  .catch(err => console.log(err));
