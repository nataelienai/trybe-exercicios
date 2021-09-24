function factorial(n) {
  let fac = 1;
  for (let i = n; i > 1; i--) {
    fac *= i;
  }
  return fac;
}

console.log(factorial(5));
