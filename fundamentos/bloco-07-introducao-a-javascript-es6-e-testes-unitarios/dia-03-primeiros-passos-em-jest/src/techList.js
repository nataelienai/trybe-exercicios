function techList(techArray, name) {
  if (!techArray.length) {
    return 'Vazio!';
  }
  let techObjectArray = [];

  techArray.sort((a, b) => a < b ? -1 : 1);
  
  for (let index = 0; index < techArray.length; index += 1) {
    techObjectArray.push({tech: techArray[index], name});
  }
  return techObjectArray;
}

module.exports = techList;
