function summation(n) {
  let sum = 0;
  for (let num = 1; num <= n; num += 1) {
    sum += num;
  }

  return sum;
}

console.log(summation(5));
