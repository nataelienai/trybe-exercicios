const { expect } = require('chai');
const getNumberPolarity = require('../getNumberPolarity');

describe('getNumberPolarity', () => {
  it('is a function', () => {
    expect(getNumberPolarity).to.be.a('function');
  });
});
