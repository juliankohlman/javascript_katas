// Given a dictionary of words (as an array) and an input string without intervening spaces, return
// the input string with spaces included such that the resulting words are all contained in the
// dictionary.

// If the string cannot be fully broken down using words in the dictionary, the function should
// return "IMPOSSIBLE".

// If there is more than one solution, return "AMBIGUOUS".

// You can assume all words and input strings are lowercase letters only and will never be empty.
// The dictionary, however, may be empty of words.

function segmentify(dictionary, inputString) {
  console.log(dictionary)
  console.log(inputString)
//   console.log(dictionary[0].indexOf('c'))
  let matches = [];
  dictionary.forEach((str,idx,arr) => {
    matches.push(inputString.match(str)[0])
  });
  console.log(matches)
}
