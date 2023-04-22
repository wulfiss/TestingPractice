import { analyzeArray } from './analyzeArray.js';

it('average && min', () => {
  expect(analyzeArray([2, 2, 2])).toStrictEqual({ average: 2, min: 2 });
});

it('average && min', () => {
  expect(analyzeArray([2, 3, 1, 5, 6])).toStrictEqual({ average: 3.4, min: 1 });
});

it('average && min with negative', () => {
  expect(analyzeArray([2, 3, 1, -5, 6, -10])).toStrictEqual({ average: -0.5, min: -10 });
});
