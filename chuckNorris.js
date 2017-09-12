// It has long been rumoured that behind Chuck's beard is not a chin, but another
// fist!

// When shaving, Chuck accidentally punched himself in the face. He is the only
// man that could take that punch without dying, but that doesn't mean it didn't
// sting! Chuck can't remember a thing - he needs your help!!

// Hidden within the provided array of arrays are numbers that represent the
// letters of the words for some of Chuck's favourite things! Your job is to
// translate them, and return the words so that Chuck can get back to the
// business of punching and kicking things.

// fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]] => 'Nunchuks'
// fistBeard([[70, 97, 99], [101, 45, 75, 105, 99, 107]]) => 'Face-Kick'

function fistBeard(arr) {
  var charCodes = arr.reduce((a, b) => a.concat(b), []);
  return charCodes.map(c => String.fromCharCode(c)).join('');
}
