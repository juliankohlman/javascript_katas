// Given a string of integers, return the number of odd-numbered substrings that can be formed.

// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

// solve("1341") = 7. See test cases for more examples.

function solve(s) {
  console.log(s.split(''))
  let nums = s.split('')
  let total = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s.slice(i) % 2 === 1) total += 1
    for (let j = 1; j < s.length - 1; j += 1) {
      if (s.slice(i,j).join('') % 2 === 1) total += 1
    }
  }
  return total;
}
