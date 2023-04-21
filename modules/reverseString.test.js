import reverseString from './reverseString.js';

it('one word', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

it('two words', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
});

it('unreverse', () => {
  expect(reverseString('mrala eht gniR')).toBe('Ring the alarm');
});
