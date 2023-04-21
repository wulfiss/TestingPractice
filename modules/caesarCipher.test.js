import caesarCipher from './caesarCipher.js';

it('shift 5', () => {
  expect(caesarCipher('Hello world', 5)).toBe('mjqqt btwqi');
});

it('shift 0', () => {
  expect(caesarCipher('Hello world', 0)).toBe('Hello world');
});

it('test punctuation', () => {
  expect(caesarCipher('Hello!, World!!!', 10)).toBe('rovvy!, gybvn!!!');
});
