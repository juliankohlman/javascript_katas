// The vowel substrings in the word codewarriors are o,e,a,io. The longest of
// these has a length of 2. Given a lowercase string that has alphabetic
// characters only and no spaces, return the length of the longest vowel
// substring.

function solve(s) {
  return Math.max(...s.match(/([aeiou])+/g).map(i => i.length));
}

solve('codewarriors'); // 2
solve('suoidea'); // 3
solve('ultrarevolutionariees'); // 3
solve('strengthlessnesses'); // 1
solve('cuboideonavicuare'); // 2
solve('chrononhotonthuooaos'); // 5
