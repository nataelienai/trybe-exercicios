const readlineSync = require('readline-sync');
const weight = readlineSync.questionFloat('How much do you weigh? (in kg) ');
const height = readlineSync.questionFloat('How tall are you? (in meters) ');
const bmi = weight / (height * height);
console.log(`Your BMI is ${bmi.toFixed(2)}`);
