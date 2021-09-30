const sum = require('../src/sum');

describe('sum', () => {
  test('returns 3 when added 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('returns 0 when added 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  describe('given a string as a parameter', () => {
    test('throws an error', () => {
      expect(() => sum(4, '5')).toThrowError();
    })
  
    test('throws an error with the message "parameters must be numbers"', () => {
      expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
    });
  });
});
