const BookModel = require('../../../src/models/Book');
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

describe('Book model', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  it('should be named "Book"', () => {
    checkModelName(Book)('Book');
  });

  it('should have the properties "title", "author" and "pageQuantity"', () => {
    ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
  });
});
