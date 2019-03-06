
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const loadData = (context, events, done) => {
  const randomInt = getRandomInt(0, 9999999);
  context.vars['randomInt'] = randomInt;
  return done();
};


module.exports = {
  loadData,
};
