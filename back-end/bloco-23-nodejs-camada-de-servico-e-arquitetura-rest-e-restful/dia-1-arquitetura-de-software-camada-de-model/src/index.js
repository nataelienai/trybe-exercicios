const express = require('express');
const rescue = require('express-rescue');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.use(express.json());

const validateUserInput = ({ firstName, lastName, email, password }) => {
  if (!firstName) {
    return { isValid: false, message: "O campo 'firstName' é obrigatório" };
  }
  if (!lastName) {
    return { isValid: false, message: "O campo 'lastName' é obrigatório" };
  }
  if (!email) {
    return { isValid: true, message: "O campo 'email' é obrigatório" };
  }
  if (!password) {
    return { isValid: false, message: "O campo 'password' é obrigatório" };
  }
  if (password.length < 6) {
    return { isValid: false, message: "O campo 'password' deve ter pelo menos 6 caracteres" };
  }
  return { isValid: true, message: '' };
};

const userInputValidation = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const validation = validateUserInput({ firstName, lastName, email, password });

  if (!validation.isValid) {
    const error = new Error(validation.message);
    error.status = 400;
    next(error);
  }

  next();
};

const userExistenceValidation = rescue(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.getById(id);

  if (!user) {
    const error = new Error('Usuário não encontrado');
    error.status = 404;
    next(error);
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

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ error: true, message: err.message })
  }
  res.status(500).json({ error: true, message: 'Erro interno do servidor' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
