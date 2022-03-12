const readlineSync = require('readline-sync');

const drawnNumber = Math.floor(Math.random() * 11);
const guessedNumber = readlineSync.questionInt('Guess a number from 0 to 10: ');

if (drawnNumber === guessedNumber) {
  console.log('Congratulations, you got it right!');
} else {
  console.log(`Oops, not this time. The correct number was ${drawnNumber}`);
}
