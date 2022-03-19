const express = require('express');
const rescue = require('express-rescue');
const axios = require('axios').default;
const tokenValidationMiddleware = require('./tokenValidationMiddleware');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.use(express.json());

app.get('/btc/price', rescue(tokenValidationMiddleware), rescue(async (_req, res) => {
  const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.status(200).json(response.data);
}));

app.use(errorMiddleware);

app.listen(3000, () => console.log('Express listening on port 3000'));
