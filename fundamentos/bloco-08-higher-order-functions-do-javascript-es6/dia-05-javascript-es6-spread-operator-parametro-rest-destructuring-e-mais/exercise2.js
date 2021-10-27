const assert = require('assert');

const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);

assert.deepStrictEqual(sum(), 0);
assert.deepStrictEqual(sum(1), 1);
assert.deepStrictEqual(sum(1, 2, 3, 4, 5), 15);
