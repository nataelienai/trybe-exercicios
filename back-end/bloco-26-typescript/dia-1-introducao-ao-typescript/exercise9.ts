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
