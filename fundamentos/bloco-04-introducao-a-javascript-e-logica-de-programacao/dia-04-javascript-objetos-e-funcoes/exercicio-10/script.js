function getTheMostRepetitive(array) {
  let counter = {};

  for (let num of array) {
    if (counter[num] == undefined) {
      counter[num] = 1;
    } else {
      counter[num] += 1;
    }
  }

  let mostRepetitive = Object.keys(counter)[0];
  
  for (let key of Object.keys(counter)) {
    if (counter[key] > counter[mostRepetitive]) {
      mostRepetitive = key;
    }
  }

  return mostRepetitive;
}

console.log(getTheMostRepetitive([2, 3, 2, 5, 8, 2, 3]));
