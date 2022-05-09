import readline from 'readline-sync';

export enum Units {
  KILOLITER = 1000,
  HECTOLITER = 100,
  DECALITER = 10,
  LITER = 1,
  DECILITER = 0.1,
  CENTILITER = 0.01,
  MILLILITER = 0.001,
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
