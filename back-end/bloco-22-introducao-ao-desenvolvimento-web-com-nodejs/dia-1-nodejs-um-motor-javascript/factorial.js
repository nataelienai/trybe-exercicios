const readlineSync = require('readline-sync');

function askNonNegativeInteger(message) {
  while (true) {
    number = readlineSync.questionInt(message);
    if (number >= 0) {
      return number;
    }
    console.log('Input a non-negative integer, please.');
  }
}

function factorial(num) {
  let result = 1;
  for (; num > 1; num -= 1) {
    result *= num;
  }
  return result;
}

function main() {
  const number = askNonNegativeInteger('Input a non-negative integer: ');
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
}

main();
