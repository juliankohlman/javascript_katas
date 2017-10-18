// Write a function hasOneChar returning:

// true if the given string contains the same character repeated all along the
// string false otherwise. For instance:

// But the purpose of this Kata is to test your creativity. You have to
// achieve it without using any loops.

// Corner cases: the function hasOneChar should return true if the string
// contains one single character.

function hasOneChar (s) {
  return s[0].repeat(s.length) === s;
}

// Regex solution from Codewars
// function hasOneChar(s) {
//   return /^(.)\1*$/.test(s);
// }

hasOneChar('a')
hasOneChar('aaaaa')
hasOneChar('aaaab')
hasOneChar('bbbbb')
hasOneChar('bbabb')
