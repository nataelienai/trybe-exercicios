const express = require('express');
const fs = require('fs').promises;

const PORT = 3001;
const app = express();

app.get('/simpsons', async (req, res) => {
  try {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    res.status(200).json(simpsons);
  } catch {
    res.status(500).end();
  }
});

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`));
