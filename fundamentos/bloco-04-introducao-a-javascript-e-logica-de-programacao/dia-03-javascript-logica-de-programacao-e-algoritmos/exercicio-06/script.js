let num = 366;
let isPrime = true;

for (let divisor = 2; divisor < num / 2; divisor += 1) {
  if (num % divisor == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("É um número primo!");
} else {
  console.log("Não é um número primo!");
}
