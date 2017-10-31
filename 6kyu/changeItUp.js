// Create a function that takes a string as a parameter and does the following,
// in this order:

// replaces every letter with the letter following it in the alphabet (see note
// below)

// makes any vowels capital
// makes any consonants lower case
// Note: the alphabet should wrap around, so Z becomes A

// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 -->
// dbU30)

function changer(str) {
  console.log(str);
  let shifted = str.replace(/[^0-9zZ ]/g, n => String.fromCharCode(n.charCodeAt(n) + 1)).toLowerCase();
  return shifted.replace(/[aeiou]/gi, n => n.toUpperCase()).replace(/z/gi, 'A');
  let res = '';

  return str.replace(/[a-z]/gi,m => String.fromCharCode(m.charCodeAt(m) + 1)
        .toLowerCase())
        .replace(/[aeiou]/gi, m => m.toUpperCase())
        .replace(/[{[]/gi, 'A');
}