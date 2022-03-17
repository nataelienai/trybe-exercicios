const express = require('express');
const fs = require('fs').promises;

const PORT = 3001;
const app = express();

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

app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await getSimpsons();
    res.status(200).json(simpsons);
  } catch {
    res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
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

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`));
