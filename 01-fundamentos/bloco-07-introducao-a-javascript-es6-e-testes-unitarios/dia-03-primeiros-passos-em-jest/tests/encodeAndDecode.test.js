const {encode, decode} = require('../src/encodeAndDecode');

describe('encode', () => {
  test('is a function', () => {
    expect(typeof encode).toBe('function');
  });
  test('converts a, e, i, o, u into 1, 2, 3, 4, 5 respectively', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });
  test('doesn\'t convert a, e, i, o, u into a, e, i, o, u respectively', () => {
    expect(encode('a')).not.toBe('a');
    expect(encode('e')).not.toBe('e');
    expect(encode('i')).not.toBe('i');
    expect(encode('o')).not.toBe('o');
    expect(encode('u')).not.toBe('u');
  });
  test('returns a string with the same length as the parameter', () => {
    expect(encode('a').length).toBe(1);
  });
});

describe('decode', () => {
  test('is a function', () => {
    expect(typeof decode).toBe('function');
  });
  test('converts 1, 2, 3, 4, 5 into a, e, i, o, u respectively', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });
  test('doesn\'t convert 1, 2, 3, 4, 5 into 1, 2, 3, 4, 5 respectively', () => {
    expect(decode('1')).not.toBe('1');
    expect(decode('2')).not.toBe('2');
    expect(decode('3')).not.toBe('3');
    expect(decode('4')).not.toBe('4');
    expect(decode('5')).not.toBe('5');
  });
  test('returns a string with the same length as the parameter', () => {
    expect(decode('1').length).toBe(1);
  });
});
