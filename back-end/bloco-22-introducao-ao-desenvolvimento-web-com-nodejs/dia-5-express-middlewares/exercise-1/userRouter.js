const express = require('express');
const rescue = require('express-rescue');
const registerValidationMiddleware = require('./registerValidationMiddleware');

const router = express.Router();

router.use(registerValidationMiddleware);

router.post('/register', rescue((_req, res) => {
  res.status(201).json({ message: 'user created' });
}));

module.exports = router;
