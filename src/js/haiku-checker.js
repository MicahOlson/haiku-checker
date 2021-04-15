// const silentE = ["ace", "age", "ale", "ape", "are", "ate", "awe", "axe", "bye", "cue", "die", "doe", "due", "dye", "eke", "eve", "eye", "ewe", "foe", "ice", "lie", "lye", "owe", "pie", "roe", "rye", "sue", "toe", "use", "woe", "bake", "bare", "bate", "bite", "cage", "cake", "came", "cane", "case", "cave", "code", "come", "cove", "cube", "cute", "dame", "date", "dime", "dine", "dove", "doze", "dude", "fame", "fare", "fate", "game", "gape", "gate", "gave", "give", "hate", "hope", "hype", "jove", "jute", "kite", "lace", "lake", "late", "lime", "lose", "love", "mace", "make", "mane", "mare", "mate", "maze", "mete", "mime", "mite", "mode", "mope", "mute", "name", "nape", "nose", "note", "pace", "page", "pane", "pike", "pine", "pipe", "pope", "ride", "ripe", "rite", "robe", "rode", "rose", "rune", "same", "shoe", "take", "tame", "tape", "time", "type", "wine", "wise", "abase", "abide", "abode", "above", "abuse", "acute", "adore", "anime", "bible", "blade", "blame", "blare", "brave", "bride", "close", "crane", "crime", "curve", "drive", "evoke", "fluke", "flume", "flute", "frame", "gauge", "goose", "grace", "grate", "grave", "gripe", "grove", "hence", "knave", "loose", "mauve", "moose", "niece", "orate", "pause", "peace", "plane", "scene", "skate", "slate", "spite", "state", "stove", "tease", "trite", "whine", "wrote", "calculate", "clothe", "conceive", "courage", "expense", "extreme", "fleece", "grease", "handle", "perceive", "please", "preserve", "receive", "reserve", "squeeze", "stripe", "turpentine", "zygote"];
// const diphthongs = ["oi", "oy", "ou", "ow", "au", "aw", "oo"];

export function syllableCounter(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; 
  let counter = 0;
  let words = string.split(" ");
  words.forEach(function(word) {
    if (silentE.includes(word)) {
      word = word.substring(0, word.length - 1);
    }
    word += "X";
    for (let i = 0; i < word.length-1; i++) {
      if (vowels.includes(word[i])) {
        if (!vowels.includes(word[i+1]))
          counter += 1;
      }
    }
  });
  return counter;
}

export function haikuChecker(str1, str2, str3) {
  const chk1 = syllableCounter(str1);
  const chk2 = syllableCounter(str2);
  const chk3 = syllableCounter(str3);
  // console.log(chk1, chk2, chk3)
  return (chk1 === 5 && chk2 === 7 && chk3 === 5);
  // return `${(chk1 === 5 && chk2 === 7 && chk3 === 5)} ${chk1} ${chk2} ${chk3}`;
}

// ===== Curried version of haikuChecker =====
// export function haikuChecker(str1) {
//   return function(str2) {
//     return function(str3) {
//       const chk1 = syllableCounter(str1);
//       const chk2 = syllableCounter(str2);
//       const chk3 = syllableCounter(str3);
//       return (chk1 === 5 && chk2 === 7 && chk3 === 5);
//     }
//   }
// }

// haikuChecker("Haikus are easy.")("But sometimes they don't make sense.")("Refrigerator.")

// const haikusAreEasy = haikuChecker("Haikus are easy.");
// haikusAreEasy("But sometimes they don't make sense.")("Refrigerator.")
// haikusAreEasy("Some other seven funnies.")("Refrigerator.")
// haikusAreEasy("Some even more funny words.")("This five syllables.")

// const nonsenseHaiku = haikuChecker("Haikus are easy.")("But sometimes they don't make sense.")

// nonsenseHaiku("Five syllables here.")

// haikuBlu (leave off those damn silent e's, yo!)

// 5 - 7 - 5 counter must equal these on each line respectively

// if vowel is followed by another vowel, don't count it



/*
Haikus are easy.
But sometimes they don't make sense.
Refrigerator.

You never feed me.
Perhaps I'll sleep on your face.
That will sure show you.

The rule for today.
Touch my tail, I shred your hand.
New rule tomorrow.

Shoe laces.
Must attack at once.
Didn't know that was you.
*/

// ====Regex example of haiku checker====

// function syllables(word) {
//   word = word.toLowerCase();
//   if(word.length <= 3) { return 1; }
//   return word.replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
//              .replace(/^y/, '')
//              .match(/[aeiouy]{1,2}/g).length;
// }

// function checkLine(sentence){
//   var count = 0;
//   var words = sentence.split(" ");
//   words.map(function(val, key){
//     count += syllables(val)
//   });
//   return count;
// }

// function haiku(a, b, c){
//   if(!a || !b || !c){
//     return {result: false, error: "Invalid input. Call haiku(line1, line2, line3)"}
//   }
//   result = [checkLine(a), checkLine(b), checkLine(c)];
//   expected = [5, 7, 5];
//   if(arrayCompare(result, expected)){
//     return true;
//   }
//   return {result: false, syllables:result};
// }

// function arrayCompare(a1, a2){
//   return a1.length==a2.length && a1.every(function(v,i) { return v === a2[i]})
// }

// ====Regex example of non capture operator(?:)====

// (https?|ftp)://([^/\r\n]+)(/[^\r\n]*)?

// Match "http://stackoverflow.com/"
//      Group 1: "http"
//      Group 2: "stackoverflow.com"
//      Group 3: "/"

// Match "https://stackoverflow.com/questions/tagged/regex"
//      Group 1: "https"
//      Group 2: "stackoverflow.com"
//      Group 3: "/questions/tagged/regex"

// (?:https?|ftp)://([^/\r\n]+)(/[^\r\n]*)?

// Match "http://stackoverflow.com/"
//      Group 1: "stackoverflow.com"
//      Group 2: "/"

// Match "https://stackoverflow.com/questions/tagged/regex"
//      Group 1: "stackoverflow.com"
//      Group 2: "/questions/tagged/regex"