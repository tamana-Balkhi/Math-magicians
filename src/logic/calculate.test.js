import calculate from './calculate';

/** * @jest-environment jsdom */

test('AC button returns object props equal null', () => {
  const obj = {
    next: null,
    operation: null,
    total: null,
  };
  calculate({}, 'AC');
  expect(obj.next).toBe(null);
});

test('testing addition ', () => {
  const obj = {
    next: 2,
    operation: '+',
    total: 5,
  };
  calculate({ next: '2', operation: '+', total: '3' }, '+');
  expect(obj.next).toBe(2);
});
