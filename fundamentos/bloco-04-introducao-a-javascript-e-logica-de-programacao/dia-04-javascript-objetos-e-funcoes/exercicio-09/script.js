function getLongestName(names) {
  if (names.length == 0) {
    return '';
  } else {
    let longestName = names[0];

    for (let name of names) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }

    return longestName;
  }
}

console.log(getLongestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
