const uppercase = require('../src/exercise7');

it('the uppercase function returns a string in uppercase', (done) => {
  const expected = 'HELLO, HOW ARE YOU?';

  uppercase('hello, how are you?', (actual) => {
    try {
      expect(actual).toBe(expected);
      done();
    } catch (error) {
      done(error);
    }
  });
});
