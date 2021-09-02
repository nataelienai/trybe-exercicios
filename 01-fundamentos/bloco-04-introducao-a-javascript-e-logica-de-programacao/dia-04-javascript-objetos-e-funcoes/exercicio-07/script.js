function getIndexOfTheHighest(numArray) {
  if (numArray.length == 0) {
    return -1;
  } else {
    let highest = numArray[0];
    let highestIndex = 0;

    for (let index in numArray) {
      if (highest < numArray[index]) {
        highest = numArray[index];
        highestIndex = index;
      }
    }

    return highestIndex;
  }
}

console.log(getIndexOfTheHighest([2, 3, 6, 7, 10, 1]));
