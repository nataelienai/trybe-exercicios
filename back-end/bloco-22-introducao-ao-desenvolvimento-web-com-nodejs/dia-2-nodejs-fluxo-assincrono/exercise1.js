function addAndMultiply(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject('Input only numbers.');
    }
    const result = (a + b) * c;
    if (result < 50) {
      reject('The value is too low.');
    }
    resolve(result);
  });
  return promise;
}
