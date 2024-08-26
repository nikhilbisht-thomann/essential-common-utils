import { generateRandomArrayIndex,trimAndRemoveSpaces } from '../src/Common';

test('generateRandomArrayIndex should return a number within range', () => {
  const arrayLength = 10;
  const index = generateRandomArrayIndex(arrayLength);
  expect(index).toBeGreaterThanOrEqual(0);
  expect(index).toBeLessThan(arrayLength);
});

test('trimAndRemoveSpaces should remove spaces from a string', () => {
  expect(trimAndRemoveSpaces(' hello world ')).toBe('helloworld');
});
