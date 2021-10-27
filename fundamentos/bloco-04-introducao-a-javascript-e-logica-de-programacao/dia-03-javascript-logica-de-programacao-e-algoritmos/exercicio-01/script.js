let n = 5;

if (n > 1) {
  for (let ln = 0; ln < n; ln += 1) {
    let asteriskLine = "";
    for (let col = 0; col < n; col += 1) {
      asteriskLine += "*";
    }
    console.log(asteriskLine);
  }
}
