import syllableCounter from '../src/js/haiku-checker.js';

describe('syllableCounter()', () => {
  test('should correctly count the number of vowels in a word', () => {
    const word = "chocolate"
    expect(syllableCounter(word)).toEqual(4);
  });
});
