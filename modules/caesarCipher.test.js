import caesarCipher from './caesarCipher.js';

it('shift 5', () => {
  expect(caesarCipher('Hello world', 5)).toBe('mjqqt btwqi');
});

it('shift 0', () => {
  expect(caesarCipher('Hello world', 0)).toBe('Hello world');
});

it('test punctation', () => {
  expect(caesarCipher('Hello!, World!!!'));
});
