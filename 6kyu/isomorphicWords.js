// Two strings a and b are called isomorphic if there is a one to one mapping
// possible for every character of a to every character of b. And all occurrences
// of every character in a map to same character in b.
// Task

// In this kata you will create a function that return True if two given strings
// are isomorphic to each other, and False otherwise. Remember that order is
// important.


// Your solution must be able to handle words with more than 10 characters.
// Example

// True:

// CBAABC DEFFED
// XXX YYY
// RAMBUNCTIOUSLY THERMODYNAMICS

// False:

// AB CC
// XXY XYY
// ABAB CD

function isomorph(a, b) {
  if (a.length !== b.length) return false;
  const isoA = a.split('').map((i, _, arr) => arr.indexOf(i));
  const isoB = b.split('').map((i, _, arr) => arr.indexOf(i));
  return isoA.every((i, idx, arr) => arr.indexOf(i) === isoB[idx]);
}

// CodeWars solution
// function isomorph(a, b) {
//   return String([...a].map(v => a.indexOf(v))) === String([...b].map(v => b.indexOf(v)));
// }

console.log(isomorph('ESTATE', 'DUELED'));//  true)
isomorph('XXX', 'YYY');//  true)
isomorph('SEE', 'SAW');//  false)
isomorph('XXY', 'XYY');//  false)
isomorph('abcdefghijk', 'abcdefghijba');//  false);
