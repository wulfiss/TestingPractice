import { shiftChar, caesarCipher } from './caesarCipher.js';

it('shift 5', () => {
  expect(caesarCipher('hello world', 5)).toBe('mjqqt ctwqi');
});

it('shift 0', () => {
  expect(caesarCipher('Hello world', 0)).toBe('Hello world');
});

it('test punctuation', () => {
  expect(caesarCipher('Hello!, World!!!', 10)).toBe('Rovvy!, Hycvn!!!');
});

it('H shift 5', () => {
  expect(caesarCipher('H', 5)).toBe('M');
});

it('Y shift 5', () => {
  expect(caesarCipher('Y', 5)).toBe('E');
});

it('x shift 9', () => {
  expect(caesarCipher('x', 9)).toBe('h');
});

it('H', () => {
  expect(shiftChar(72, 5, 90, 65)).toBe(77);
});

it('Y', () => {
  expect(shiftChar(89, 6, 90, 65)).toBe(70);
});

it('e', () => {
  expect(shiftChar(101, 5, 122, 92)).toBe(106);
});

it('y', () => {
  expect(shiftChar(121, 6, 122, 92)).toBe(97);
});
