const generateRandom = (max) => {
  return Math.ceil(Math.random() * (max));
}

const calculateDrawResult = (betNumber, isEqualFn) => {
  const drawnNumber = generateRandom(5);

  return isEqualFn(betNumber, drawnNumber)
  ? 'Parabéns você ganhou'
  : 'Tente novamente';
}

console.log(calculateDrawResult(2, (n1, n2) => n1 === n2));
