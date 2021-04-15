import { syllableCounter, haikuChecker } from '../src/js/haiku-checker.js';

// describe('syllableCounter()', () => {
//   // test('should correctly count the number of vowels in a word', () => {
//   //   const word = "chocolate"
//   //   expect(syllableCounter(word)).toEqual(4);
//   // });

//   test('should correctly count the number of syllables in a word', () => {
//     const word = "chocolate"
//     expect(syllableCounter(word)).toEqual(4);
//   });
// });

describe('haikuChecker()', () => {
  test('should correctly count the number of syllables', () => {
    const line1 = "Haikus ar easy."
    const line2 = "But somtims they don't mak sens."
    const line3 = "Refrigerator."
    expect(haikuChecker(line1, line2, line3)).toEqual(true);
  });
});