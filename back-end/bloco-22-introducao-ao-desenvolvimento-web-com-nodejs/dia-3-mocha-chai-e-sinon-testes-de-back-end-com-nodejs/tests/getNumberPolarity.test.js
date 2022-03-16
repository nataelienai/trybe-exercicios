const { expect } = require('chai');
const getNumberPolarity = require('../getNumberPolarity');

describe('getNumberPolarity', () => {
  it('is a function', () => {
    expect(getNumberPolarity).to.be.a('function');
  });

  describe('When not given an argument', () => {
    it('throws an error', () => {
      expect(getNumberPolarity).to.throw();
    });
  });

  describe('When given a number', () => {
    it('returns a string', () => {
      const result = getNumberPolarity(5);
      expect(result).to.be.a('string');
    });

    it('returns \'positive\' for positive numbers', () => {
      const result = getNumberPolarity(7);
      expect(result).to.equal('positive');
    });

    it('returns \'negative\' for negative numbers', () => {
      const result = getNumberPolarity(-5);
      expect(result).to.equal('negative');
    });

    it('returns \'neutral\' for 0', () => {
      const result = getNumberPolarity(0);
      expect(result).to.equal('neutral');
    });
  });
});
