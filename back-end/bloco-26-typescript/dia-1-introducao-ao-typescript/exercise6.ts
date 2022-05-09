import readline from 'readline-sync';

export enum Units {
  KILOGRAM = 1000,
  HECTOGRAM = 100,
  DECAGRAM = 10,
  GRAM = 1,
  DECIGRAM = 0.1,
  CENTIGRAM = 0.01,
  MILLIGRAM = 0.001,
}

type Unit = keyof typeof Units;

export function convert(value: number, baseUnit: Unit, conversionUnit: Unit) {
  return value * (Units[baseUnit] / Units[conversionUnit]);
}

function exec() {
  const value = readline.questionInt('Value: ');

  const baseUnit = readline.question('From unit: ', {
    limit: Object.values(Units).filter((key) => typeof key === 'string')
  }).toUpperCase();

  const conversionUnit = readline.question('To unit: ', {
    limit: Object.values(Units).filter((key) => typeof key === 'string')
  }).toUpperCase();

  const convertedValue = convert(value, baseUnit as Unit, conversionUnit as Unit);
  console.log(`${value} ${baseUnit} is equal to ${convertedValue} ${conversionUnit}`);
}

exec();
