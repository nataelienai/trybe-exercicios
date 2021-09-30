const myFizzBuzz = require('../src/myFizzBuzz');

describe('myFizzBuzz', () => {
  test('returns "fizzbuzz" when the number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('returns "fizz" when the number is divisible by 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  test('returns "buzz" when the number is divisible by 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('returns the number itself when it is not divisible by 3 or 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('returns false when the parameter is not a number', () => {
    expect(myFizzBuzz('abc')).toBe(false);
  });
});
