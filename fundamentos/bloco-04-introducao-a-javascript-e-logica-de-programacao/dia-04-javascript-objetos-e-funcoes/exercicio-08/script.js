function getIndexOfTheLowest(numArray) {
  if (numArray.length == 0) {
    return -1;
  } else {
    let lowest = numArray[0];
    let lowestIndex = 0;

    for (let index in numArray) {
      if (lowest > numArray[index]) {
        lowest = numArray[index];
        lowestIndex = index;
      }
    }

    return lowestIndex;
  }
}

console.log(getIndexOfTheLowest([2, 4, 6, 7, 10, 0, -3]));
