const express = require('express');
const rescue = require('express-rescue');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.use(express.json());

const userInputValidation = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName) {
    return res.status(400).json({
      error: true,
      message: "O campo 'firstName' é obrigatório"
    });
  }
  if (!lastName) {
    return res.status(400).json({
      error: true,
      message: "O campo 'lastName' é obrigatório"
    });
  }
  if (!email) {
    return res.status(400).json({
      error: true,
      message: "O campo 'email' é obrigatório"
    });
  }
  if (!password) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' é obrigatório"
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }
  next();
};

const userExistenceValidation = rescue(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.getById(id);

  if (!user) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }
  next();
});

app.post('/user', userInputValidation, rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.create({ firstName, lastName, email, password });

  res.status(201).json(user);
}));

app.get('/user', rescue(async (req, res) => {
  const users = await User.getAll();

  return res.status(200).json(users);
}));

app.get('/user/:id', userExistenceValidation, rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(id);

  return res.status(200).json(user);
}));

app.put('/user/:id', userInputValidation, userExistenceValidation, rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const user = await User.update({ id, firstName, lastName, email, password });

  res.status(200).json(user);
}));

app.use((_err, _req, res, _next) => {
  res.status(500).json({ message: 'Erro interno do servidor' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
