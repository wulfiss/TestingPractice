import { analyzeArray } from './analyzeArray.js';

it('average', () => {
  expect(analyzeArray([2, 2, 2])).toBe({ average: 2 });
});

it('average', () => {
  expect(analyzeArray([2, 3, 1, 5, 6])).toBe({ average: 3.4 });
});
