import calculator from './calculator.js';

it('add(3 + 2)', () => {
  const value = calculator().add(3, 2);
  expect(value).toBe(5);
});

it('add(10 + 123)', () => {
  expect(calculator().add(10, 123)).toBe(133);
});

it('add(10 + (-100))', () => {
  expect(calculator().add(10, -100)).toBe(-90);
});
