// Given an array of integers.

// Return a number that is the sum of

// The product of all the non-negative numbers
// The sum of all the negative numbers
// Edge cases

// If the array is empty, result should be 1.
// If the array is null, result should be 0.

// For example:

// mathEngine([1, 2, 3, -4, -5]) should return -3

function mathEngine (arr) {
  if (arr === null) return 0;
  const posNums = arr.filter(i => i >= 0).reduce((a, b) => a * b, 1)
  const negNums = arr.filter(i => i <= 0).reduce((a, b) => a + b, 0)
  return arr.length === 0 ? 1 : posNums + negNums;
}

mathEngine([1, 2, 3, -4, -5])
