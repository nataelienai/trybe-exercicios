require('dotenv').config();
const express = require('express');
const { Book } = require('./src/models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
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
  
    const result = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.destroy({ where: { id } });

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
