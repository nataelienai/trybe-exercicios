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
