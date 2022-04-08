const { Op } = require('sequelize');
const { Book } = require('../models');

const findAll = async (req, res) => {
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
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity });

    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    res.status(200).json({
      id: book.id,
      title,
      author,
      pageQuantity,
      updatedAt: book.updatedAt,
      createdAt: book.createdAt
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const remove = async (req, res) => {
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
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
