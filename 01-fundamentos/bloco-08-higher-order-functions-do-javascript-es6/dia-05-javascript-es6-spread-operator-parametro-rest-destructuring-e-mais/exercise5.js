const assert = require('assert');

const myList = [1, 2, 3];

const swap = ([elem1, elem2, elem3]) => [elem3, elem2, elem1];

const expected = [3, 2, 1];
const received = swap(myList);

assert.deepStrictEqual(received, expected);
