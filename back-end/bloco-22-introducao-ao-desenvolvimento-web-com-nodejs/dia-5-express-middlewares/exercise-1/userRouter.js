const express = require('express');
const rescue = require('express-rescue');
const registerValidationMiddleware = require('./registerValidationMiddleware');
const loginValidationMiddleware = require('./loginValidationMiddleware');
const { generateToken } = require('./util');

const router = express.Router();

router.post('/register', rescue(registerValidationMiddleware), rescue((_req, res) => {
  res.status(201).json({ message: 'user created' });
}));

router.post('/login', rescue(loginValidationMiddleware), rescue((_req, res) => {
  res.status(200).json({ token: generateToken() });
}));

module.exports = router;
