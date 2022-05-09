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
