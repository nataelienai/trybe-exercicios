let numbers = [];

for (let number = 1; number <= 25; number += 1) {
  numbers.push(number);
}

console.log("array: " + numbers);

for (let number of numbers) {
  console.log(number + "/" + 2 + " = " + number / 2);
}
