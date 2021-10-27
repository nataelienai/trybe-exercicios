let n = 5;

for (let ln = 0; ln < n; ln += 1) {
  let asteriskLine = "";
  for (let col = n - 1; col > ln; col -= 1) {
    asteriskLine += " ";
  }
  for (let col = 0; col <= ln; col += 1) {
    asteriskLine += "*";
  }
  console.log(asteriskLine);
}
