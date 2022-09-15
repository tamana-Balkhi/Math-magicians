import operate from './operate';

describe('Test operations with numbers', () => {
  test('  x sign', () => {
    expect(operate(5, 8, 'x')).toBe('40');
  });

  test('÷ sign', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('+ sign', () => {
    expect(operate(6, 4, '+')).toBe('10');
  });
  test('-', () => {
    expect(operate(6, 4, '-')).toBe('2');
  });
});
