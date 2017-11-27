// Write function wordPattern(pattern, str)

// that given a pattern and a string str, find if str follows the same sequence
// as pattern.

// For example:

// wordPattern('abab', 'truck car truck car') === true
// wordPattern('aaaa', 'dog dog dog dog') === true
// wordPattern('abab', 'apple banana banana apple') === false
// wordPattern('aaaa', 'cat cat dog cat') === false


function wordPattern(pattern, str) {
  const ptnStr = {};
  pattern.split('').forEach((i, idx) => (ptnStr[i] = str.split(' ')[idx]));
  const testStr = pattern.split('').map(i => ptnStr[i]).join(' ');
  return Object.keys(ptnStr).length > str.split(' ').filter((i, idx, col) => col.indexOf(i) === idx).length ? false : testStr === str;
}

// CodeWars solution
// function wordPattern(pattern, str) {
//     const p = pattern.split('').map((v, i, a) => a.indexOf(v))
//     const s = str.split(' ').map((v, i, a) => a.indexOf(v))
//     return p.every((v, i) => v === s[i])
// }

wordPattern('abab', 'apple banana apple banana');// , true);
wordPattern('abba', 'car truck truck car');// , true);
wordPattern('abab', 'apple banana banana apple');// , false);
wordPattern('aaaa', 'cat cat cat cat');// , true);
wordPattern('aaaa', 'cat cat dog cat');// , false);
wordPattern('bbbabcb', 'c# c# c# javascript c# python c#');// , true);
