const express = require('express');

const PORT = 8080;
const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`));
