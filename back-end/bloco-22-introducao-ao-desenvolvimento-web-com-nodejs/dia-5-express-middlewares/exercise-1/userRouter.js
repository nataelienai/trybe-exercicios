const express = require('express');
const rescue = require('express-rescue');
const inputValidationMiddleware = require('./inputValidationMiddleware');

const router = express.Router();

router.use(inputValidationMiddleware);

router.post('/register', rescue((_req, res) => {
  res.status(201).json({ message: 'user created' });
}));

module.exports = router;
