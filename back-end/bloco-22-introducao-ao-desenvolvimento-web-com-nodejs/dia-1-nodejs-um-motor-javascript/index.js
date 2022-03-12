const readlineSync = require('readline-sync');

function main() {
  const scripts = {
    'Body Mass Index (BMI) Calculator': './bmi',
    'Average Speed Calculator': './speed',
    'Guessing game': './guessing',
    'Factorial Calculator': './factorial',
  };
  const scriptNames = Object.keys(scripts);
  const option = readlineSync.keyInSelect(scriptNames, 'Which script should be run?');
  const chosenScript = scriptNames[option];

  if (!chosenScript) return;
  require(scripts[chosenScript]);
}

main();
