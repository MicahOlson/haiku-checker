export default function syllableCounter(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];  // silent e, non-vowel y conditions needed
  let counter = 0;
  for (let letter of string) {
    if (vowels.includes(letter)) {
      counter += 1;
    }
  }
  return counter;
}
