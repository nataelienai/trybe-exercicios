const searchEmployee = require('../src/searchEmployee');

describe('searchEmployee', () => {
  test('is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('returns correct information based on employee id', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
  test('returns error message if employee id is not on professional board', () => {
    expect(searchEmployee('0000-0', 'firstName')).toBe('ID não identificada');
    expect(searchEmployee('1234-5', 'lastName')).toBe('ID não identificada');
    expect(searchEmployee('9999-9', 'specialities')).toBe('ID não identificada');
  });
  test('returns error message if requested information doesn\'t exist', () => {
    expect(searchEmployee('4678-2', 'phoneNumber')).toBe('Informação indisponível');
    expect(searchEmployee('9852-2-2', 'address')).toBe('Informação indisponível');
    expect(searchEmployee('1256-4', 'salary')).toBe('Informação indisponível');
  });
});
