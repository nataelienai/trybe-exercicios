let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbersCounter = 0;

for (number of numbers) {
  if (number % 2) {
    oddNumbersCounter += 1;
  }
}

if (oddNumbersCounter > 0) {
  console.log(oddNumbersCounter);
} else {
  console.log("nenhum valor ímpar encontrado");
}
