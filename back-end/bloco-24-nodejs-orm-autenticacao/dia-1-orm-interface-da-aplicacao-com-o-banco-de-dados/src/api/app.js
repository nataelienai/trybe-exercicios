const express = require('express');
const { Op } = require('sequelize');
const BookController = require('../controllers/Book');

const app = express();

app.use(express.json());

app.get('/books', BookController.findAll);
app.get('/book/:id', BookController.findById);
app.post('/book', BookController.create);
app.post('/book/:id', BookController.update);
app.delete('/book/:id', BookController.remove);

module.exports = app;
