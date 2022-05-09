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
