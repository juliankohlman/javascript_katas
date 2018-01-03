// In this Kata, we are going to determine if the count of each of the characters in a string can be
// equal if we remove a single character from that string.

// For example:

// solve('abba') = false -- if we remove any character, the count of each character will not be
// equal.

// solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
// solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
// solve('wwwf') = true -- if we remove f, the remaining letters have same count.

function solve(s){
console.log(s);
 let freq = {}
 for (let l of s) {
   freq[l] ? freq[l] += 1 : freq[l] = 1;
 }
 console.log(freq);
 let values = Object.values(freq);
 console.log(values);
 let len = Object.values(freq).length;
 if (values.every((i) => i === 1)) return true;

 console.log(len)
 console.log(values);
 console.log(values.sort((a,b) => a - b));
 console.log(values)
 if (values.lastIndexOf(1) === 0 && values.slice(1).every((i) => i === values[1])) return true;
//  if (values.lastIndexOf(1) === 0) return true;
 let chrTotal = Object.values(freq).reduce((a,b) => a + b);
 console.log(chrTotal);

 return (chrTotal - 1) % len === 0 ? true : false;
};
