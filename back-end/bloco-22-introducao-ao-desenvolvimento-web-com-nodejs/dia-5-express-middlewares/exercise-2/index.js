const express = require('express');
const axios = require('axios').default;

const app = express();

app.use(express.json());

function hasOnlyLettersAndNumbers(string) {
  const validationRegex = /^[A-Z0-9]+$/i;
  return validationRegex.test(string);
}

function isTokenValid(token) {
  return token && token.length === 12 && hasOnlyLettersAndNumbers(token);
}

app.get('/btc/price', async (req, res) => {
  const token = req.headers.authorization;

  if (!isTokenValid(token)) {
    return res.status(401).json({ message: 'invalid token' });
  }
  const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.status(200).json(response.data);
});

app.listen(3000, () => console.log('Express listening on port 3000'));
