/**
 * Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
Expected: '[24, \'k\', 93, \'n\', 93, \'n\', \'h\', \'l\', \'l\', \'f\']', instead got: '[24, \'k\', 93, \'n\', 93, \'n\']'
Expected: '[23, \'v\', \'h\', \'c\', \'r\', \'f\', \'o\', \'g\']', instead got: '[23, \'v\']'
 */

const mergeArrays = (a, b) => {
  let result = [];

  while (a.length + b.length > 0) {
    if (a.length) result.push(a.shift());
    if (b.length) result.push(b.shift());
  }
  return result;
};

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]));
// [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
// ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ["b", "r", "a", "u", "r", "s"]));
// [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']
console.log(
  mergeArrays(
    ["b", "r", "a", "u", "r", "s", "e", "q", "z"],
    [2, 5, 8, 23, 67, 6]
  )
);
// ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']
