import { analyzeArray } from './analyzeArray.js';

it('average', () => {
  expect(analyzeArray([2, 2, 2])).toStrictEqual({ average: 2 });
});

it('average', () => {
  expect(analyzeArray([2, 3, 1, 5, 6])).toStrictEqual({ average: 3.4 });
});
