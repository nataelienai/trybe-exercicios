const express = require('express');

const PORT = 8080;
const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}`));
