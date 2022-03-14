const { addAndMultiply } = require('./exercise1');

function getRandomIntegerInRange(lowerLimit, upperLimit) {
  return Math.floor(lowerLimit + (Math.random() * (upperLimit - lowerLimit + 1)));
}

addAndMultiply(
  getRandomIntegerInRange(1, 100),
  getRandomIntegerInRange(1, 100),
  getRandomIntegerInRange(1, 100)
)
  .then((result) => {
    console.log(`Result: ${result}`)
  })
  .catch((err) => {
    console.error(err);
  });
