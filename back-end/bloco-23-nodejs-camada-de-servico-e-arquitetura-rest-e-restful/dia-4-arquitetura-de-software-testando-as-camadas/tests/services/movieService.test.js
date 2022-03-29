const { expect } = require('chai');
const sinon = require('sinon');
const MoviesModel = require('../../src/models/movieModel');
const MoviesService = require('../../src/services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(MoviesModel, 'create').resolves({ id: 1 });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.an('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.have.a.property('id');
    });
  });
});
