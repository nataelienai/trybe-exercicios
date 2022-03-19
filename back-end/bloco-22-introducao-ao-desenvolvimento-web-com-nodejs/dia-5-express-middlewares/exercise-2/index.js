const express = require('express');
const axios = require('axios').default;
const tokenValidationMiddleware = require('./tokenValidationMiddleware');

const app = express();

app.use(express.json());

app.get('/btc/price', tokenValidationMiddleware, async (_req, res) => {
  const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.status(200).json(response.data);
});

app.listen(3000, () => console.log('Express listening on port 3000'));
