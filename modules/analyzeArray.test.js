import { analyzeArray } from './analyzeArray.js';

it('average && min && max && length', () => {
  expect(analyzeArray([2, 2, 2])).toStrictEqual({ average: 2, min: 2, max: 2, length: 3 });
});

it('average && min && max && length', () => {
  expect(analyzeArray([2, 3, 1, 5, 6])).toStrictEqual({ average: 3.4, min: 1, max: 6, length: 5 });
});

it('average && min && max && length with negative', () => {
  expect(analyzeArray([2, 3, 1, -5, 6, -10])).toStrictEqual({ average: -0.5, min: -10, max: 6, length: 6 });
});
