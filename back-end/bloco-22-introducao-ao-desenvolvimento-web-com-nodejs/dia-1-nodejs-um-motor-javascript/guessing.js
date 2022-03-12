const readlineSync = require('readline-sync');

function getRandomInteger(upperLimit) {
  return Math.floor(Math.random() * (upperLimit + 1));
}

function main() {
  const guessedNumber = readlineSync.questionInt('Guess a number from 0 to 10: ');
  const drawnNumber = getRandomInteger(10);

  if (drawnNumber === guessedNumber) {
    console.log('Congratulations, you got it right!');
  } else {
    console.log(`Oops, not this time. The correct number was ${drawnNumber}`);
  }
}

main();
