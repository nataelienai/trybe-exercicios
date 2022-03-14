const readlineSync = require('readline-sync');

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function getWeightStatus(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal';
  } else if (bmi < 30) {
    return 'Overweight';
  } else if (bmi < 35) {
    return 'Obese class I';
  } else if (bmi < 40) {
    return 'Obese class II';
  }
  return 'Obese class III';
}

function main() {
  const weight = readlineSync.questionFloat('How much do you weigh? (in kg) ');
  const height = readlineSync.questionFloat('How tall are you? (in meters) ');

  const bmi = calculateBMI(weight, height);
  const category = getWeightStatus(bmi);

  console.log(`Your BMI is ${bmi.toFixed(2)}`);
  console.log(`Your weight is in the ${category} category`);
}

main();
