const request = require('request');
const fs = require('fs');

const download = async (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

let count = 1;
function populateFolder() {
  if (count === 1001) {
    return console.log('done!');
  }
  download('https://loremflickr.com/590/590/food', `pics/user${count}.jpg`, () => {
    console.log('done');
    count += 1;
    populateFolder();
  });
}
populateFolder();
<<<<<<< HEAD
=======
//make a file named pics in your folder for this function.  Makes 100 random lorem photos.  You're welcome Cow.
>>>>>>> 7450e86b2ee624af55ae7f1e9ad2a4bae75df007
