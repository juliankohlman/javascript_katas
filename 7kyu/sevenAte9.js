// Write a function that removes every lone 9 that is inbetween 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'
// Input: String Output: String

function sevenAte9 (str) {
  let result = str.replace(/(797)/g, '77')
  return result.replace(/(797)/g, '77')
}

// CW solution
// function sevenAte9(str){
//   return str.replace(/79(?=7)/g, '7');
// }

sevenAte9('79712312') // '7712312'
sevenAte9('79797') // '777'
