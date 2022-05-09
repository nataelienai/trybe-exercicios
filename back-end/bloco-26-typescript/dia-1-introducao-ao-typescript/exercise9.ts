import readline from 'readline-sync';

export enum Units {
  CUBIC_KILOMETER = 10 ** 9,
  CUBIC_HECTOMETER = 10 ** 6,
  CUBIC_DECAMETER = 10 ** 3,
  CUBIC_METER = 1,
  CUBIC_DECIMETER = 10 ** -3,
  CUBIC_CENTIMETER = 10 ** -6,
  CUBIC_MILLIMETER = 10 ** -9,
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
