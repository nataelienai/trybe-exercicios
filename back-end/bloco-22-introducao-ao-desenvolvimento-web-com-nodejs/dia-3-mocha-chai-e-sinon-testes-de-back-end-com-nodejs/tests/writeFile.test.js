const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const fs = require('fs').promises;
const writeFile = require('../writeFile');

sinon.stub(fs, 'writeFile').resolves();
chai.use(chaiAsPromised);
const { expect } = chai;

describe('writeFile', () => {
  it('is a function', () => {
    expect(writeFile).to.be.a('function');
  });

  it('throws error when not given any arguments', () => {
    expect(writeFile()).to.eventually.throw();
  });

  it('throws error when not given the file name', () => {
    expect(writeFile(undefined, 'content')).to.eventually.throw();
  });

  it('throws error when not given the content to write', () => {
    expect(writeFile('fileName.txt')).to.eventually.throw();
  });

  it('returns \'ok\' when it finishes writing the file', () => {
    const result = writeFile('fileName.txt', 'content');
    expect(result).to.eventually.equal('ok');
  });
})