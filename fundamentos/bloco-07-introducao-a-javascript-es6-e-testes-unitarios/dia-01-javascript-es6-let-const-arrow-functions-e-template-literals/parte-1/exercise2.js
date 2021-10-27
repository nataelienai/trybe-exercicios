const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortInAscendingOrder = (array) => [...array].sort((a, b) => a - b);

console.log(`Os números ${sortInAscendingOrder(oddsAndEvens)} se encontram ordenados de forma crescente!`);
