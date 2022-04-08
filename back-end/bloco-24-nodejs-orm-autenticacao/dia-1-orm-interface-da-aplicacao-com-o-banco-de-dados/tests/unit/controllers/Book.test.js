const chai = require('chai');
const chaiHttp = require('chai-http');
const { stub } = require('sinon');
const { expect } = chai;
const app = require('../../../src/api/app');
const { Book } = require("../../../src/models");

chai.use(chaiHttp);

describe('GET /books', () => {
  context('when there are no books', () => {
    let response = {};

    before(async () => {
      stub(Book, 'findAll').resolves([]);

      response = await chai.request(app).get('/books');
    });

    after(() => {
      Book.findAll.restore();
    });

    it('calls Book.findAll', () => {
      expect(Book.findAll.calledOnce).to.equal(true);
    });

    it('returns the status code 200', () => {
      expect(response.status).to.equal(200);
    });

    it('returns an array', () => {
      expect(response.body).to.be.an('array');
    });

    it('returns an empty array', () => {
      expect(response.body).to.be.empty;
    });
  });

  context('when there are books', () => {
    let response = {};
    const books = [
      {
        id: 1,
        title: "Lord of the Rings",
        author: "J. R. R. Tolkien",
        pageQuantity: 1178,
        createdAt: "2001-09-28 01:00:00",
        updatedAt: "2001-09-28 01:00:00",
      },
      {
        id: 2,
        title: "Harry Potter",
        author: "J. K. Rowling",
        pageQuantity: 4100,
        createdAt: "2001-09-28 02:00:00",
        updatedAt: "2001-09-28 02:00:00",
      }
    ];

    before(async () => {
      stub(Book, 'findAll').resolves(books);

      response = await chai.request(app).get('/books');
    });

    after(() => {
      Book.findAll.restore();
    });

    it('calls Book.findAll', () => {
      expect(Book.findAll.calledOnce).to.equal(true);
    });

    it('returns the status code 200', () => {
      expect(response.status).to.equal(200);
    });

    it('returns an array', () => {
      expect(response.body).to.be.an('array');
    });

    it('returns an array containing all books', () => {
      expect(response.body).to.deep.equal(books);
    });
  });
});

describe('GET /book/:id', () => {
  context('when the book is not found', () => {
    let response = {};

    before(async () => {
      stub(Book, 'findByPk').resolves(null);

      response = await chai.request(app).get('/book/1');
    });

    after(() => {
      Book.findByPk.restore();
    });

    it('calls Book.findByPk', async () => {
      expect(Book.findByPk.calledOnce).to.equal(true);
    });

    it('returns the status code 404', async () => {
      expect(response.status).to.equal(404);
    });

    it('returns an object with the message "Livro não encontrado"', async () => {
      expect(response.body).to.deep.equal({ message: 'Livro não encontrado' });
    });
  });

  context('when the book is found', () => {
    let response = {};
    const book = {
      id: 1,
      title: "Lord of the Rings",
      author: "J. R. R. Tolkien",
      pageQuantity: 1178,
      createdAt: "2001-09-28 01:00:00",
      updatedAt: "2001-09-28 01:00:00",
    };

    before(async () => {
      stub(Book, 'findByPk').resolves(book);

      response = await chai.request(app).get('/book/1');
    });

    after(() => {
      Book.findByPk.restore();
    });

    it('calls Book.findByPk', async () => {
      expect(Book.findByPk.calledOnce).to.equal(true);
    });

    it('returns the status code 200', async () => {
      expect(response.status).to.equal(200);
    });

    it('returns an object containing the book data', async () => {
      expect(response.body).to.deep.equal(book);
    });
  });
});

describe('POST /book', () => {
  context('when the book is successfully created', () => {
    let response = {};
    const book = {
      id: 2,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      pageQuantity: 689,
      updatedAt: "2022-01-28T15:45:28.398Z",
      createdAt: "2022-01-28T15:45:28.398Z"
    };

    before(async () => {
      stub(Book, 'create').resolves(book);

      response = await chai.request(app).post('/book').send({
        title: book.title,
        author: book.author,
        pageQuantity: book.pageQuantity,
      });
    });

    after(() => {
      Book.create.restore();
    });

    it('calls Book.create', async () => {
      expect(Book.create.calledOnce).to.equal(true);
    });

    it('returns the status code 201', async () => {
      expect(response.status).to.equal(201);
    });

    it('returns an object containing the created book data', async () => {
      expect(response.body).to.deep.equal(book);
    });
  });
});

describe('POST /book/:id', () => {
  context('when the book does not exist', () => {
    let response = {};

    before(async () => {
      stub(Book, 'findByPk').resolves(null);

      response = await chai.request(app).get('/book/1');
    });

    after(() => {
      Book.findByPk.restore();
    });

    it('calls Book.findByPk', async () => {
      expect(Book.findByPk.calledOnce).to.equal(true);
    });

    it('returns the status code 404', async () => {
      expect(response.status).to.equal(404);
    });

    it('returns an object with the message "Livro não encontrado"', async () => {
      expect(response.body).to.deep.equal({ message: 'Livro não encontrado' });
    });
  });

  context('when the book is successfully updated', () => {
    let response = {};
    const book = {
      id: 2,
      title: "The Va Cinci Dode",
      author: "Ban Drown",
      pageQuantity: 589,
      updatedAt: "2022-01-28T15:45:28.398Z",
      createdAt: "2022-01-28T15:45:28.398Z"
    };
    
    before(async () => {
      stub(Book, 'findByPk').resolves(book);
      stub(Book, 'update').resolves(book);

      response = await chai.request(app).post('/book/2').send({
        title: book.title,
        author: book.author,
        pageQuantity: book.pageQuantity,
      });
    });

    after(() => {
      Book.findByPk.restore();
      Book.update.restore();
    });

    it('calls Book.findByPk', async () => {
      expect(Book.findByPk.calledOnce).to.equal(true);
    });

    it('calls Book.update', async () => {
      expect(Book.update.calledOnce).to.equal(true);
    });

    it('returns the status code 200', async () => {
      expect(response.status).to.equal(200);
    });

    it('returns an object containing the updated book data', async () => {
      expect(response.body).to.deep.equal(book);
    });
  });
});
