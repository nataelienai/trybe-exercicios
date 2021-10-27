// tamanho da base
let n = 10;

// calcular a quantidade de linhas
let numberOfLines = Math.ceil(n / 2);

// calcular a quantidade inicial de espaços
let numberOfBlanks = Math.ceil(n / 2) - 1;

// calcular a quantidade inicial de asteriscos
let numberOfAsterisks = 1;

if (n % 2 == 0) {
  numberOfAsterisks = 2;
}

// criar o loop que percorre as linhas
for (let ln = 1; ln <= numberOfLines; ln += 1) {
  let entireLine = "";
  entireLine += " ".repeat(numberOfBlanks);
  entireLine += "*".repeat(numberOfAsterisks);
  console.log(entireLine);
  numberOfBlanks -= 1;
  numberOfAsterisks += 2;
}
