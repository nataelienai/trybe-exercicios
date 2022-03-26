const express = require('express');
const rescue = require('express-rescue');
const Cep = require('../controllers/Cep');

const router = express.Router();

router.get('/:cep', rescue(Cep.getDetails));

module.exports = router;
