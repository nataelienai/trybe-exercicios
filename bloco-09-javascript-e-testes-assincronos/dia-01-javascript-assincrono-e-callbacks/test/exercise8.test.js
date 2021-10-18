const { getPokemonDetails } = require("../src/exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(({ name }) => name === 'Pikachu', (error, message) => {
      try {
        expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => { 
    getPokemonDetails(({ name }) => name === 'Squirtle', (error, message) => {
      try {
        const expected = `Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`
        expect(message).toBe(expected);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
