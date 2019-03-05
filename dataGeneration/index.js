const moment = require('moment');
const faker = require('faker');
const DataGenerator = require('./DataGenerator.js');

const CHUNK_SIZE = 1000;
const MAX_ROWS = 140 * 1000 * 1000;

if (MAX_ROWS < CHUNK_SIZE || MAX_ROWS % CHUNK_SIZE !== 0) {
  throw new Error('Invalid CHUNK_SIZE or MAX_ROWS');
}

const getRandomNumber = (minimum, maximum) => {
  minimum = Math.ceil(minimum);
  maximum = Math.floor(maximum);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const getRandomDate = (months) => {
  const date = new Date().getTime();
  const future = new Date();
  const dateDifference = future.setMonth(future.getMonth() + months);
  return moment(getRandomNumber(date, dateDifference)).format('YYYY-MM-DD');
};

const generatePhotos = () => {
  const restaurant_id = getRandomNumber(0, 9999999);
  const image_url = `https://s3.amazonaws.com/cowiesdcphotos/user${getRandomNumber(1, 1000)}.jpg`;
  const caption = faker.random.words();
  const username = faker.name.findName();
  const hover_data = faker.random.words();
  const date_posted = getRandomDate(10);

  return `${restaurant_id},"${image_url}","${caption}","${username}","${hover_data}","${date_posted}"`;
};

const photoGenerator = new DataGenerator(generatePhotos, CHUNK_SIZE, MAX_ROWS, 'database/photos.csv');

photoGenerator.generate();
