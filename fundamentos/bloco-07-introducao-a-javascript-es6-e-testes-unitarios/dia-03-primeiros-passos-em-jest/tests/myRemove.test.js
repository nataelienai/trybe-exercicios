const myRemove = require('../src/myRemove');

describe('myRemove', () => {
  describe('given an element that is in the array', () => {
    test('returns the array without the removed element', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('doesn\'t return the same array', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
  });
  describe('given an element that is not in the array', () => {
    test('returns the same array', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });
});
