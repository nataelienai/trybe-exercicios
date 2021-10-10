const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (people) => {
  return people.filter(({ bornIn, nationality }) => (
    bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian'
  ));
}

const expected = [
  { name: 'Nicole', bornIn: 1992, nationality: 'Australian' },
  { name: 'Toby', bornIn: 1901, nationality: 'Australian' }
];

const received = filterPeople(people);

assert.deepStrictEqual(received, expected);
