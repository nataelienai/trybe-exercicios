const readlineSync = require('readline-sync');

function askPositveNumber(message) {
  while(true) {
    const number = readlineSync.questionInt(message);
    if (number > 0) {
      return number;
    }
    console.log('Input a positive number, please.');
  }
}

function calculateFibonacci(numberOfElements) {
  if (numberOfElements === 1) return [1];

  const fibonacci = [1, 1];
  for (let i = 2; i < numberOfElements; i += 1) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

function main() {
  const numberOfElements = askPositveNumber('Number of elements in the sequence: ');
  const fibonacci = calculateFibonacci(numberOfElements);

  console.log(fibonacci.toString());
}

main();
