const express = require('express');
const cepRouter = require('./src/routes/Cep');
const errorMiddleware = require('./src/middlewares/Error');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.use('/cep', cepRouter);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
