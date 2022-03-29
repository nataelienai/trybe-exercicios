const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../src/models/connection');
const MoviesModel = require('../../src/models/movieModel');

describe('Movie Model', () => {
  describe('Insere um novo filme no BD', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const execute = [{ insertId: 1 }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(() => {
      connection.execute.restore();
    });

    describe('quando é inserido com sucesso', () => {
      it('retorna um objeto', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.be.an('object');
      });

      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.have.a.property('id');
      });
    });
  });

  describe('Ao consultar um filme', () => {
    describe('quando não existe no banco de dados', () => {
      before(() => {
        const result = [[]];
        sinon.stub(connection, 'execute').resolves(result);
      });
    
      after(() => {
        connection.execute.restore();
      });

      it('retorna null', async () => {
        const response = await MoviesModel.getById(1);
        expect(response).to.be.null;
      });
    });

    describe('quando existe no banco de dados', () => {
      const movie = {
        id: 1,
        title: 'Example',
        directedBy: 'John Doe',
        year: 1999,
      };

      before(() => {
        const result = [[movie]];
        sinon.stub(connection, 'execute').resolves(result);
      });
    
      after(() => {
        connection.execute.restore();
      });

      it('retorna um objeto', async () => {
        const response = await MoviesModel.getById(movie.id);
        expect(response).to.be.an('object');
      });

      it('retorna o objeto correto', async () => {
        const response = await MoviesModel.getById(movie.id);
        expect(response).to.deep.equal(movie);
      });
    });
  });
});
