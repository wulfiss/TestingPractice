import caesarCipher from './caesarCipher.js';
import { shiftChar } from './caesarCipher.js';

/* it('shift 5', () => {
  expect(caesarCipher('He', 5)).toBe('mjqqt btwqi');
});
 */
/* it('shift 0', () => {
  expect(caesarCipher('Hello world', 0)).toBe('Hello world');
});

it('test punctuation', () => {
  expect(caesarCipher('Hello!, World!!!', 10)).toBe('rovvy!, gybvn!!!');
});
 */

it('H', () => {
  expect(shiftChar(72, 5, 90, 65)).toBe(77);
});

it('Y', () => {
  expect(shiftChar(89, 6, 90, 65)).toBe(71);
});

it('e', () => {
  expect(shiftChar(101, 5, 122, 92)).toBe(106);
});

it('y', () => {
  expect(shiftChar(121, 6, 122, 92)).toBe(98);
});
