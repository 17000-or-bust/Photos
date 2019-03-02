const moment = require('moment');
const faker = require('faker');
const DataGenerator = require('./DataGenerator.js');

const CHUNK_SIZE = 1000;
const MAX_ROWS = 10 * 1000 * 1000;

if (MAX_ROWS < CHUNK_SIZE || MAX_ROWS % CHUNK_SIZE !== 0) {
  throw new Error('Invalid CHUNK_SIZE or MAX_ROWS');
}

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDate = (maxMonths) => {
  const date = new Date().getTime();
  const futureDate = new Date();
  const dateFromNow = futureDate.setMonth(futureDate.getMonth() + maxMonths);
  return moment(getRandomNumber(date, dateFromNow)).format('YYYY-MM-DD');
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
