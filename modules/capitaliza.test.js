import capitalize from './capitalize.js';

it('Capitalize first letter of one word', () => {
  expect(capitalize('car')).toBe('Car');
});

it('Capitalize first letter of more than one word', () => {
  expect(capitalize('house, burn')).toBe('House, Burn');
});

it('Already capitalize letter, one word', () => {
  expect(capitalize('Sunday')).toBe('Sunday');
});

it('Already capitalize letter, more than one word', () => {
  expect(capitalize('Sunday Vibes')).toBe('Sunday Vibes');
});
