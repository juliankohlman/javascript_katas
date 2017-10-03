// Given a string, capitalize the letters that occupy even indexes and odd
// indexes separately, and return as shown below. Index 0 will be considered
// even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for
// more examples.

// The input will be a lowercase string with no spaces.

function capitalize (s) {
  const result = ['', ''];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result[0] += s[i].toUpperCase();
      result[1] += s[i];
    } else {
      result[1] += s[i].toUpperCase();
      result[0] += s[i];
    }
  }
  return result;
};

// CW solution
// function capitalize(s){
//   return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
// };

console.log(capitalize('abcdef')) // ['AbCdEf', 'aBcDeF']
capitalize('codewars') // ['CoDeWaRs', 'cOdEwArS']
capitalize('abracadabra') // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
capitalize('codewarriors') // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
