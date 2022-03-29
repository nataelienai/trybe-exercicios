const sinon = require('sinon');
const { expect } = require('chai');
const MoviesService = require('../../src/services/movieService');
const MoviesController = require('../../src/controllers/movieController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'create').resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.equal(true);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'create').resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.equal(true);
    });
  });
});

/*
Continuando a utilizar o método send na response para manter o padrão que o 
código do exercício já possuía.
*/

describe('Ao consultar um filme', () => {
  describe('quando não existe no banco de dados', () => {
    const request = {};
    const response = {};

    before(() => {
      request.params = { id: 1 };
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves(null);
    });

    after(() => {
      MoviesService.getById.restore();
    });

    it('retorna response com status 404', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.true;
    });

    it('retorna response com mensagem "Filme não encontrado."', async () => {
      await MoviesController.getById(request, response);
      expect(response.send.calledWith('Filme não encontrado.')).to.be.true;
    });
  });

  describe('quando existe no banco de dados', () => {
    const movie = {
      id: 1,
      title: 'Example',
      directedBy: 'John Doe',
      year: 1999,
    };

    const request = {};
    const response = {};

    before(() => {
      request.params = { id: movie.id };
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves(movie);
    });

    after(() => {
      MoviesService.getById.restore();
    });

    it('retorna um objeto', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

    it('retorna o objeto correto', async () => {
      await MoviesController.getById(request, response);
      expect(response.send.calledWith(movie)).to.be.true;
    });
  });
});
