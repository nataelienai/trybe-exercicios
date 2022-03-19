const express = require('express');
const routeNotFoundMiddleware = require('./routeNotFoundMiddleware');

const app = express();

app.use(express.json());

app.all('*', routeNotFoundMiddleware);

app.listen(3000, () => console.log('Express listening on port 3000'));
