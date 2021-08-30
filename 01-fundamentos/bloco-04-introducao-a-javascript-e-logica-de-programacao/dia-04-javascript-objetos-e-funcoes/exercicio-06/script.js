function isPalindrome(word) {
  let result = true;
  for (let index in word) {
    if (word[index] !== word[(word.length - 1) - index]) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(isPalindrome('desenvolvimento'));
