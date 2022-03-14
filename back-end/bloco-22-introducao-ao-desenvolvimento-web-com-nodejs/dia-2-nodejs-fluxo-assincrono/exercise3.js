const { addAndMultiply } = require('./exercise1');

function getRandomIntegerInRange(lowerLimit, upperLimit) {
  return Math.floor(lowerLimit + (Math.random() * (upperLimit - lowerLimit + 1)));
}

async function main() {
  try {
    const result = await addAndMultiply(
      getRandomIntegerInRange(1, 100),
      getRandomIntegerInRange(1, 100),
      getRandomIntegerInRange(1, 100)
    );
    console.log(`Result: ${result}`)
  } catch (err) {
    console.error(err);
  }
}

main();
