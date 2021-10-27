const grossIncome = 5000.00;
let netIncome;

if (grossIncome <= 1556.94) {
  netIncome = grossIncome * 0.92;
} else if (grossIncome <= 2594.92) {
  netIncome = grossIncome * 0.91;
} else if (grossIncome <= 5189.82) {
  netIncome = grossIncome * 0.89;
} else {
  netIncome = grossIncome - 570.88;
}

if (netIncome > 1903.98 && netIncome <= 2826.65) {
  let incomeTax = netIncome * 0.075 - 142.80;
  netIncome -= incomeTax;
} else if (netIncome <= 3751.05) {
  let incomeTax = netIncome * 0.15 - 354.80;
  netIncome -= incomeTax;
} else if (netIncome <= 4664.68) {
  let incomeTax = netIncome * 0.225 - 636.13;
  netIncome -= incomeTax;
} else {
  let incomeTax = netIncome * 0.275 - 869.36;
  netIncome -= incomeTax;
}

console.log(netIncome);