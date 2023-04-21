import reverseString from './reverseString.js';

it('one word', () => {
  expect(reverseString('Hello').toBe('olleH'));
});

it('two words', () => {
  expect(reverseString('Hello World').toBe('olleH dlroW'));
});

it('unreverse', () => {
  expect(reverseString('gniR eht mrala').toBe('Ring the alarm'));
});
