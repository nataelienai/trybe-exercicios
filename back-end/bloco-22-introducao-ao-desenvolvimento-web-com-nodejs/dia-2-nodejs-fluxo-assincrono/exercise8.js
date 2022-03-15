const util = require('util');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
const question = util.promisify(rl.question).bind(rl);

async function askPositiveInteger(message) {
  while (true) {
    const number = Number(await question(message));
    if (number > 0) {
      rl.close();
      return number;
    }
    console.log('Input only positive integers, please.');
  }
}

function returnsPromiseBasedOnNumber(num) {
  return new Promise((resolve, reject) => {
    let word = '';
    if (num % 3 === 0) {
      word = word.concat('Fizz');
    }
    if (num % 5 === 0) {
      word = word.concat('Buzz');
    }
    if (!word) {
      reject(num);
    }
    resolve(word);
  });
}

async function main() {
  const number = await askPositiveInteger('Input a positive integer: ');
  try {
    const fulfilledValue = await returnsPromiseBasedOnNumber(number);
    console.log(`fulfilled value: ${fulfilledValue}`);
  } catch (rejectedValue) {
    console.error(`rejected value: ${rejectedValue}`);
  }
}

main();
