function checkStringEnding(word, ending) {
  let isEqual = true;
  let indexWord = word.length - 1;

  for (let indexEnding = ending.length - 1; indexEnding >= 0; indexEnding -= 1) {
    if (word[indexWord] != ending[indexEnding]) {
      isEqual = false;
      break;
    }
    indexWord -= 1;
  }

  return isEqual;
}

console.log(checkStringEnding('joaofernando', 'fernand'));
