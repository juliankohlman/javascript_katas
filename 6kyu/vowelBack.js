/**
 * You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.
 */

const vowelBack = (s) => {
  // solution here
  let letters = "abcdefghijklmnopqrstuvwxyz";

  let letterCodes = {};
  for (const letter of letters) {
    letterCodes[letter] = letter.charCodeAt(0);
  }

  for (let l of s) {
  }
  // create table/Map of {a: ascii, b: ascii}
  // * use ascii codes to increment letters
  // * add logic to check for passing z
  // * add logic to check for passing a
  // * special cases for c,o,d, and e
  // console.log(letterCodes);
  // return s.codePointAt(0);
  //* process string handle all cases the convert codes back to string
};

console.log(vowelBack("testcase")); //  "tabtbvba"
console.log(vowelBack("codewars")); //  "bnaafvab"
console.log(vowelBack("exampletesthere")); //  "agvvyuatabtqaaa"
