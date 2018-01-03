// In this Kata, we are going to determine if the count of each of the characters in a string can be
// equal if we remove a single character from that string.

// For example:

// solve('abba') = false -- if we remove any character, the count of each character will not be
// equal.

// solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
// solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
// solve('wwwf') = true -- if we remove f, the remaining letters have same count.

function solve(s) {
  const freq = {};
  s.split('').forEach(i => freq[i] ? freq[i] += 1 : freq[i] = 1);
  const values = Object.values(freq).sort((a, b) => a - b);
  if (values.every(i => i === 1)) return true;
  if (values.lastIndexOf(1) === 0 && values.slice(1).every(i => i === values[1])) return true;
  const chrTotal = values.reduce((a, b) => a + b) - 1;
  return chrTotal % values.length === 0;
}

// Codewars solution for comparison
// function solve(s){
//   var h={};
//   [...s].forEach(c=>h[c]=(h[c]||0)+1)
//   var r=Object.values(h).sort((a,b)=>a-b)
//   return r.slice(0,-1).every(x=>x==r[r.length-1]-1)||r[0]==1&&r.slice(1).every(x=>x==r[1])
// }

console.log(solve('aaaa')); // true
solve('abba'); // false
solve('abbba'); // true
solve('aabbcc'); // fals
solve('aaaabb'); // fals
solve('aabbccdd'); // true
solve('aabcde'); //  true
solve('abcde'); // true
solve('aaabcde'); // false
solve('abbccc'); // false;
