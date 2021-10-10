const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  return names.reduce((acc, name) => {
    const count = name
      .split('')
      .reduce((acc, char) => (char === 'a' || char === 'A' ? acc + 1 : acc), 0);
    return acc + count;
  }, 0);
}

assert.deepStrictEqual(containsA(), expectedResult);
