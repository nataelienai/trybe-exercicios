const readlineSync = require('readline-sync');

const weight = readlineSync.questionFloat('How much do you weigh? (in kg) ');
const height = readlineSync.questionFloat('How tall are you? (in meters) ');

const bmi = weight / (height * height);
let category;
if (bmi < 18.5) {
  category = 'Underweight';
} else if (bmi < 25) {
  category = 'Normal';
} else if (bmi < 30) {
  category = 'Overweight';
} else if (bmi < 35) {
  category = 'Obese class I';
} else if (bmi < 40) {
  category = 'Obese class II';
} else {
  category = 'Obese class III';
}
console.log(`Your BMI is ${bmi.toFixed(2)}`);
console.log(`Your weight is in the ${category} category`);
