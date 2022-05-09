export enum Units {
  KILOMETER = 1000,
  HECTOMETER = 100,
  DEKAMETER = 10,
  METER = 1,
  DECIMETER = 0.1,
  CENTIMETER = 0.01,
  MILLIMETER = 0.001,
}

type Unit = keyof typeof Units;

export function convert(value: number, baseUnit: Unit, conversionUnit: Unit) {
  return value * (Units[baseUnit] / Units[conversionUnit]);
}
