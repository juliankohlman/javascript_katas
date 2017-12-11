// You are given an array of values.
// Sum every number value in the array, and any nested arrays (to any depth).
// Ignore all other types of values.

function arraySum(arr) {
  let result = [];
  arr.forEach((item) => {
    Array.isArray(item) ? result = result.concat(arraySum(item)) : result.push(item);
  });
  return result.filter(i => typeof i === 'number').reduce((a, b) => a + b);
}

arraySum([1, 2, 3, [4, 5, 6, [7]]]);
// function arraySum(arr) {
//   return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
// }
