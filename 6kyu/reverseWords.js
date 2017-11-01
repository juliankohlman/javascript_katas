// Write a reverseWords function that accepts a string a parameter, and reverses
// each word in the string. Every space should stay, so you cannot use words from
// Prelude.

// Example:

// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// reverseWords "An example!"    -- "nA !elpmaxe"
// reverseWords "double  spaces" -- "elbuod  secaps"

function reverseWords (str) {
  return str.replace(/\w+[.+]|\w+/gi, m => m.split('').reverse().join(''));
}

reverseWords('The quick brown fox jumps over the lazy dog.') // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords('apple') // 'elppa'
reverseWords('a b c d') // 'a b c d'
reverseWords('double  spaced  words') // 'elbuod  decaps  sdrow'
