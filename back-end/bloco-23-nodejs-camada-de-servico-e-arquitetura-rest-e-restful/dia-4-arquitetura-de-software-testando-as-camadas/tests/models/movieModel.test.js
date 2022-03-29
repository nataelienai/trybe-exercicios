const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../src/models/connection');
const MoviesModel = require('../../src/models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

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
