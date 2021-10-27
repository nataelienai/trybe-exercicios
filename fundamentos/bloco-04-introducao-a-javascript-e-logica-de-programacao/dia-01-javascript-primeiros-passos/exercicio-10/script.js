const productCost = 300;
const productSalesValue = 400;

if (productCost < 0 || productSalesValue < 0) {
  console.log("ERRO: Um ou mais valores de entrada são menores que 0!");
} else {
  let totalProductCost = productCost * 1.2;
  profit = 1000 * (productSalesValue - totalProductCost);
  console.log(profit);
}
