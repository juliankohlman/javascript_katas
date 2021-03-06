// Write a program to determine if a string contains all unique characters. Return true if it does
// and false otherwise.

// The string may contain any of the 128 ASCII characters.

function hasUniqueChars (str) {
  const chrs = str.split('')
  return chrs.every((i, idx) => idx === chrs.lastIndexOf(i))
}

hasUniqueChars('  nAa') // false
hasUniqueChars('abcdef') // true
hasUniqueChars('++-') // false
