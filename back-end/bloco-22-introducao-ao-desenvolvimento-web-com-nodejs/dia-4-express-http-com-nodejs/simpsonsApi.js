const express = require('express');
const fs = require('fs').promises;

const PORT = 3001;
const app = express();

app.use(express.json());

async function getSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  return simpsons;
}

async function getSimpsonById(id) {
  const simpsons = await getSimpsons();
  const wantedSimpson = simpsons.find((simpson) => (
    parseInt(simpson.id) === parseInt(id)
  ));
  return wantedSimpson;
}

async function isSimpsonIdTaken(id) {
  const simpsons = await getSimpsons();
  const isTaken = simpsons.some((simpson) => (
    parseInt(simpson.id) === parseInt(id)
  ));
  return isTaken;
}

async function addSimpson(simpson) {
  const simpsons = await getSimpsons();
  simpsons.push(simpson);

  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons, null, 2));
}

app.get('/simpsons', async (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  try {
    const simpsons = await getSimpsons();
    res.status(200).json(simpsons);
  } catch {
    res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  if (token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  try {
    const simpson = await getSimpsonById(id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found!' });
    }
    res.status(200).json(simpson);
  } catch {
    res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const token = req.headers.authorization;
  if (token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  try {
    const isIdTaken = await isSimpsonIdTaken(id);
    if (isIdTaken) {
      return res.status(409).json({ message: 'id already exists!' });
    }
    addSimpson({ id, name });
    res.status(204).end();
  } catch {
    res.status(500).end();
  }
});

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`));
