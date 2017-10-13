// In this kata you are required to, given a string, replace every letter with
// its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// a being 1, b being 2, etc.

// As an example:

// alphabet_position("The sunset sets at twelve o' clock.")

function alphabetPosition (text) {
  const alphabet = '0abcdefghijklmnopqrstuvwxyz';
  const letters = text.toLowerCase().split('').filter(c => c.match(/[a-z]/));
  return letters.map(i => alphabet.indexOf(i)).join(' ');
}

alphabetPosition("The sunset sets at twelve o' clock.")
