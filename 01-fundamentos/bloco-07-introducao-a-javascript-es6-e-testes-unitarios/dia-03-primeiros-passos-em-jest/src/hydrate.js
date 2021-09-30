function hydrate(string) {
  let cupsOfWater = 0;
  for (let char of string) {
    let num = Number(char);
    if (num >= 1 && num <= 9) {
      cupsOfWater += num;
    }
  }
  if (cupsOfWater > 1) {
    return `${cupsOfWater} copos de água`;
  }
  return `${cupsOfWater} copo de água`;
}

module.exports = hydrate;
