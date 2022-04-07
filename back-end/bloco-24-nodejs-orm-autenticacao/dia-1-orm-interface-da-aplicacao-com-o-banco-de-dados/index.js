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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
