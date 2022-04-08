const express = require('express');
const { Op } = require('sequelize');
const { Book } = require('../models');

const app = express();

app.use(express.json());

app.get('/books', async (req, res) => {
  try {
    const { author } = req.query;
    const books = author
      ? await Book.findAll({
        where: { author: { [Op.like]: `%${author}%` } },
        order: [['title', 'ASC'], ['created_at', 'ASC']],
      })
      : await Book.findAll({ order: [['title', 'ASC'], ['created_at', 'ASC']]});

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/book', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity });

    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    res.status(200).json({ title, author, pageQuantity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    await Book.destroy({ where: { id } });

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = app;
