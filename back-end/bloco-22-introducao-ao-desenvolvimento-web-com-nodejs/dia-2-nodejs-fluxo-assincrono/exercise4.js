const fs = require('fs').promises;

async function getSimpsonsFromFile(simpsonsFile) {
  let simpsons = [];
  try {
    const simpsonsRawData = await fs.readFile(simpsonsFile, { encoding: 'utf-8' });
    simpsons = JSON.parse(simpsonsRawData);
  } catch (error) {
    console.error(error.message);
  }
  return simpsons;
}

async function printSimpsons() {
  const simpsons = await getSimpsonsFromFile('simpsons.json');

  simpsons.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
}

async function getSimpsonById(id) {
  const simpsons = await getSimpsonsFromFile('simpsons.json');

  const character = simpsons.find((simpson) => Number(simpson.id) === id);
  if (!character) {
    throw new Error('id não encontrado');
  }
  return character;
}

async function removeSimpsonsWithId6And10() {
  const simpsons = await getSimpsonsFromFile('simpsons.json');
  const newSimpsons = await simpsons.filter(({ id }) => (
    Number(id) !== 6 && Number(id) !== 10
  ));

  fs.writeFile('simpsonsWithout6and10.json', JSON.stringify(newSimpsons));
}

async function createSimpsonFamily() {
  const simpsons = await getSimpsonsFromFile('simpsons.json');
  const newSimpsons = await simpsons.filter(({ id }) => (
    Number(id) >= 1 && Number(id) <= 4
  ));

  fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsons));
}

async function addSimpsonToSimpsonFamily() {
  const simpsons = await getSimpsonsFromFile('simpsons.json');
  const newSimpsons = await simpsons.filter(({ id, name }) => (
    Number(id) >= 1 && Number(id) <= 4 || name === 'Nelson Muntz'
  ));

  fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsons));
}

async function replaceSimpsonInSimpsonFamily() {
  const simpsons = await getSimpsonsFromFile('simpsons.json');
  const simpsonFamily = await getSimpsonsFromFile('simpsonFamily.json');
  const maggieSimpson = simpsons.find(({ name }) => name === 'Maggie Simpson');
  const newSimpsonFamily = simpsonFamily.map((simpson) => {
    if (simpson.name === 'Nelson Muntz') return maggieSimpson;
    else return simpson;
  });

  fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsonFamily));
}
