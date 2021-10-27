// tamanho da base (assume-se que será sempre ímpar)
let n = 7;

// calcular a quantidade total de linhas
let numberOfLines = Math.ceil(n / 2);

// calcular a quantidade inicial de espaços
let initialBlanks = Math.ceil(n / 2) - 1;

// primeira linha
let entireLine = " ".repeat(initialBlanks) + "*";
console.log(entireLine);
initialBlanks -= 1;

// meio
for (let ln = 1; ln <= numberOfLines - 2; ln += 1) {
  entireLine = "";
  entireLine += " ".repeat(initialBlanks) + "*";
  entireLine += " ".repeat(2 * ln - 1) + "*";
  console.log(entireLine);
  initialBlanks -= 1;
}

// última linha
console.log("*".repeat(n));