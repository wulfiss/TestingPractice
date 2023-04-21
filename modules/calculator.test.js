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

it('subtract(3 - 2)', () => {
  expect(calculator().subtract(3, 2)).toBe(1);
});

it('subtract(10 - 123)', () => {
  expect(calculator().subtract(10, 123)).toBe(-113);
});

it('subtract(10 - (-100))', () => {
  expect(calculator().subtract(10, -100)).toBe(110);
});

it('divide(3 / 2)', () => {
  expect(calculator().divide(3, 2)).toBeCloseTo(1.5);
});

it('divide(10 / 123)', () => {
  expect(calculator().divide(10, 123)).toBeCloseTo(0.081);
});

it('divide(10 / (-2))', () => {
  expect(calculator().divide(10, -2)).toBe(-5);
});
