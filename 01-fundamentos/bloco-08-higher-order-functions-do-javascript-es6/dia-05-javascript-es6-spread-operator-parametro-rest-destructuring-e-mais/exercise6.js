const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([ model, brand, year ]) => ({ model, brand, year });

const palioObject = {model: 'Palio', brand: 'Fiat', year: 2019};
const shelbyCobraObject = {model: 'Shelby Cobra', brand: 'Ford', year: 1963};
const chironObject = {model: 'Chiron', brand: 'Bugatti', year: 2016};

assert.deepStrictEqual(toObject(palio), palioObject);
assert.deepStrictEqual(toObject(shelbyCobra), shelbyCobraObject);
assert.deepStrictEqual(toObject(chiron), chironObject);
