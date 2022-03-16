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
  });
});
