const fs = require('fs');
const faker = require('faker');
const moment = require('moment');


const startTime = Date.now();
console.log(`Starting data generation ${moment().format('HH:MM:SS')}`);

const getRandomNum = (min, max) => `${faker.random.number({ min, max })}`;

const seedPhotos = () => {
  const resWriteable = fs.createWriteStream('database/photos.csv');
  let buffer = '';
  for (let j = 0; j < 1000; j++) {
    for (let i = 0; i < 10000; i++) {
      const id = (j * 10000) + i;
      const restaurant_id = faker.random.number(9999999);
      const image_url = `https://s3.amazonaws.com/cowiesdcphotos/user${getRandomNum(1, 1000)}.jpg`;
      const caption = faker.random.words();
      const username = faker.name.findName();
      const hover_data = faker.random.words();
      const date_posted = moment(faker.date.past()).format('YYYY-MM-DD');

      buffer += `${id},${restaurant_id},"${image_url}","${caption}","${username}","${hover_data}","${date_posted}"\n`;
    }
    resWriteable.write(buffer);
    buffer = '';
  }
};

console.log('Generating Photos data....');
seedPhotos();
console.log('Writing data to files....');
const endTime = Date.now();
console.log(`Success. Elapsed time: ${moment(endTime).diff(moment(startTime), 'seconds')} seconds`);
