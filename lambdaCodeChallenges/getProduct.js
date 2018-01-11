// Write a function called getProduct that gets the product of all the integers at the array EXCEPT the
// one at that index.

// For example, given [1, 9, 6, 5, 2] your function should return [540, 60, 90, 108,  270], because the
// calculation looks like this:

// [9 * 6 * 5 * 2, 1 * 6 * 5 * 2, 1 * 9 * 5 * 2, 1 * 9 * 6 * 5].

// Edge cases: No division, as some arrays may include 0. Target time: O(n).

function getProduct(arr) {
  const result = [];
  arr.forEach((_, index) => {
    // not O(n) time complexity
    result.push(arr.filter((i, idx) => idx !== index).reduce((a, b) => a * b));
  });
  return result;
}

console.log(getProduct([1, 9, 6, 5, 2]));
