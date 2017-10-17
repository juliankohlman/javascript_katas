// Write a function that takes a string and returns an array containing binary
// numbers equivalent to the ASCII codes of the characters of the string. The
// binary strings should be eight digits long.

// Example: 'man' should return [ '01101101', '01100001', '01101110' ]

function wordToBin (str) {
  const res = [];
  for (let l of str) {
    res.push('0' + l.charCodeAt().toString(2))
  }
  return res;
}

wordToBin('man') // [ '01101101', '01100001', '01101110' ]
wordToBin('AB') // ['01000001', '01000010']
wordToBin('wecking') // [ '01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111' ]
wordToBin('Ruby') // [ '01010010', '01110101', '01100010', '01111001' ]
wordToBin('Yosemite') // [ '01011001', '01101111', '01110011', '01100101', '01101101', '01101001', '01110100', '01100101' ]
