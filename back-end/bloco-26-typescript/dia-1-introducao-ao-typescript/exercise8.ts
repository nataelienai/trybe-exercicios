import readline from 'readline-sync';

export enum Units {
  SQUARE_KILOMETER = 10 ** 6,
  SQUARE_HECTOMETER = 10 ** 4,
  SQUARE_DECAMETER = 10 ** 2,
  SQUARE_METER = 1,
  SQUARE_DECIMETER = 10 ** -2,
  SQUARE_CENTIMETER = 10 ** -4,
  SQUARE_MILLIMETER = 10 ** -6,
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
